using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Offerte.Core.Models;
using Offerte.Utils;

namespace Offerte.Core.Services
{
    public interface IAgenteService : IBaseService<Agente, long, OfferteDbContext>
    {
        IEnumerable<Agente> Search(AgenteSearchModel model);
    }

    public class AgenteService : BaseService<Agente, long, OfferteDbContext>, IAgenteService
    {
        public AgenteService(IConfiguration configuration, OfferteDbContext ctx = null)
            : base(configuration, ctx)
        {
        }

        public IEnumerable<Agente> Search(AgenteSearchModel model)
        {
            return ctx.Agente;
        }
    }

    public class AgenteSearchModel : QueryBuilderSearchModel
    {

    }
}
