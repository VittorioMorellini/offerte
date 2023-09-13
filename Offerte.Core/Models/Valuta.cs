using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Valuta
{
    public short Id { get; set; }

    public string? DescrBreve { get; set; }

    public string? Descrizione { get; set; }

    public double? CambioEuro { get; set; }

    public short? ValutaOmega { get; set; }

    public string? DummyPoof { get; set; }

    public string? Codice { get; set; }
}
