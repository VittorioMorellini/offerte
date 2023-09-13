# Scaffolding command
Scaffold-DbContext "Server=S-2020-150127\SQLEXPRESS;Initial Catalog=Offerte;Persist Security Info=False;User Id=sa;Password=sapwd;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -Project Offerte.Core -StartupProject Offerte.Api -OutputDir Models -Context OfferteDbContext -Schemas dbo -NoPluralize -Force

# Then delete method  OnConfiguring in FitPlanContext.cs
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
    optionsBuilder.UseSqlServer();
}

# And create these two constructors
public ViewerDbContext()
{
}

public ViewerDbContext(DbContextOptions<ViewerDbContext> options) : base(options)
{
}