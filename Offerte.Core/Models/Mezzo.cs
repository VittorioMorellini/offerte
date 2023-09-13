using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Mezzo
{
    public string Codice { get; set; } = null!;

    public string? Descrizione { get; set; }
}
