using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class CalcoloFarEast
{
    public string Nome { get; set; } = null!;

    public string? Formula { get; set; }

    public int? Ordinamento { get; set; }
}
