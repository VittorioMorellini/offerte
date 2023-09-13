using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Trasportatore
{
    public short? Id { get; set; }

    public string? Descrizione { get; set; }

    public string? IndirizzoMail { get; set; }

    public short? IdTrasporto { get; set; }
}
