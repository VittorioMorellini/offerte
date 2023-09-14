using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class CostoAcquisto
{
    public long Id { get; set; }

    public double ValoreAcqDa { get; set; }

    public double ValoreAcqA { get; set; }

    public double Moltiplicatore { get; set; }

    public double Setup { get; set; }
}
