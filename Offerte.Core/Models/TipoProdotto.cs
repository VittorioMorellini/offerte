﻿using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class TipoProdotto
{
    public short Id { get; set; }

    public string? Descrizione { get; set; }

    public string? CodicePerLayup { get; set; }

    public int? NumFacce { get; set; }

    public int? NumStrati { get; set; }

    public double? PesoKgmetroQ { get; set; }
}