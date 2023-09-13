using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class PostCalcolo
{
    public string Nome { get; set; } = null!;

    public string Formula { get; set; } = null!;

    public int? Ordinamento { get; set; }
}
