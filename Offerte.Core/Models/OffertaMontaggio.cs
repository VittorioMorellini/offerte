using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class OffertaMontaggio
{
    public int Id { get; set; }

    public int IdOfferta { get; set; }

    public int IdUtente { get; set; }

    public bool TopPth { get; set; }

    public bool TopSmd { get; set; }

    public bool TopFinePitch { get; set; }

    public bool TopBga { get; set; }

    public bool BottomPth { get; set; }

    public bool BottomSmd { get; set; }

    public bool BottomFinePitch { get; set; }

    public bool BottomBga { get; set; }

    public double? TotCostoSetup { get; set; }

    public double? TotProgMacc { get; set; }

    public double? TotCostoMont { get; set; }

    public double? TotComponenti { get; set; }

    public double? TotaleTest { get; set; }

    public double? Costoacquisto { get; set; }
}
