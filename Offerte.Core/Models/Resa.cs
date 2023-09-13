using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Resa
{
    public short Id { get; set; }

    public string? Descrizione { get; set; }

    public bool CostoZero { get; set; }

    public string? Codice { get; set; }
}
