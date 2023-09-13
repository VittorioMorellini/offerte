using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Trasporto
{
    public short Id { get; set; }

    public string? Descrizione { get; set; }

    public double? CostoUnitario { get; set; }

    public short? GiorniConsegna { get; set; }

    public string? Codice { get; set; }

    public short? IdCorrispondente { get; set; }

    public bool EscludiFestivita { get; set; }
}
