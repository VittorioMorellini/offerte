using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Agente
{
    public long Id { get; set; }

    public string? RagioneSociale { get; set; }

    public string? Indirizzo { get; set; }

    public string? Cap { get; set; }

    public string? Localita { get; set; }

    public string? CodiceFiscale { get; set; }

    public string? PartitaIva { get; set; }

    public string? Telefono { get; set; }

    public string? NumeroFax { get; set; }

    public double? Budget { get; set; }

    public double? FattProg { get; set; }

    public string? Password { get; set; }

    public bool Supervisore { get; set; }

    public string? Mail { get; set; }

    public bool FarEast { get; set; }

    public string? PasswordMail { get; set; }

    public string? Name { get; set; }

    public string? Surname { get; set; }

    public virtual ICollection<AgenteGruppo> AgenteGruppo { get; set; } = new List<AgenteGruppo>();

    public virtual AgentePassword? AgentePassword { get; set; }

    public virtual ICollection<Offerta> Offerta { get; set; } = new List<Offerta>();
}
