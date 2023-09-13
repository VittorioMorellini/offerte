using System;
using Microsoft.Extensions.Configuration;
using Offerte.Core.Models;
using Offerte.Utils;

namespace Offerte.Core.Services
{
    public interface IAgenteGruppoService : IBaseService<AgenteGruppo, long, OfferteDbContext>
    {
        IEnumerable<AgenteGruppo> Search(AgenteGruppoSearchModel model);
    }

    public class AgenteGruppoService : BaseService<AgenteGruppo, long, OfferteDbContext>, IAgenteGruppoService
    {
        public AgenteGruppoService(IConfiguration configuration, OfferteDbContext ctx = null)
            : base(configuration, ctx)
        {
        }

        public IEnumerable<AgenteGruppo> Search(AgenteGruppoSearchModel model)
        {
            return ctx.AgenteGruppo;
        }
    }

    public class AgenteGruppoSearchModel : QueryBuilderSearchModel
    {

    }
}
