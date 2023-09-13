using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Fornitore
{
    public short Id { get; set; }

    public string? RagioneSociale { get; set; }

    public string? Indirizzo { get; set; }

    public short? IdTipoPagamento { get; set; }

    public string? IndirizzoMail { get; set; }
}
