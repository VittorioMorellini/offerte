using Microsoft.EntityFrameworkCore;
using Offerte.Api.Controllers;
using Offerte.Core.Models;
using Offerte.Core.Models.Auth;
using Offerte.Core.Services;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var logger = new LoggerConfiguration()
                .ReadFrom.Configuration(builder.Configuration)
                //.MinimumLevel.Information()
                //.MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                .Enrich.FromLogContext()
                //.WriteTo.RollingFile("logs/{Date}.txt")
                .CreateLogger();

//builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(builder =>
        //builder.WithOrigins("http://localhost:5173")
        builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
));

#region services
builder.Services.AddDbContext<OfferteDbContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("Offerte")),
    // è necessario che sia Transient poichè ho necessità di compiere azioni asincrone
    // ogni Service così ha la propria versione unica di DocDsDbContext (con la propria connessione)
    ServiceLifetime.Transient
);
builder.Services.AddSingleton(new AuthContext()
{
    JWTSecretKey = builder.Configuration["Auth:JWTSecretKey"],
    JWTLifespan = builder.Configuration["Auth:JWTLifespan"],
});

builder.Services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
//builder.Services.AddSingleton<IAppCache, CachingService>();
//builder.Services.AddSingleton<CommonDataService>();
builder.Services.AddScoped<IAgenteService, AgenteService>();
builder.Services.AddScoped<IAgenteGruppoService, AgenteGruppoService>();
builder.Services.AddScoped<IIdentityService, IdentityService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
