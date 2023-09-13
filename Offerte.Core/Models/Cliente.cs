using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Cliente
{
    public int Id { get; set; }

    public short? IdTrasporto { get; set; }

    public string? CodMezzo { get; set; }

    public double? Tolleranza { get; set; }

    public string? CodNazione { get; set; }

    public string? CodClienteAhr { get; set; }
}
