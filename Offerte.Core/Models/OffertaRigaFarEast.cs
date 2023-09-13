using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class OffertaRigaFarEast
{
    public int Id { get; set; }

    public int IdOfferta { get; set; }

    public double? Quantita { get; set; }

    public double? Prezzo { get; set; }

    public DateTime? DataConsegna { get; set; }

    public int? Tolleranza { get; set; }

    public double? CostoCina { get; set; }

    public double? CostoTrasporto { get; set; }

    public double? AttrezzaturaCina { get; set; }

    public double? Peso { get; set; }

    public DateTime? DataArrivo { get; set; }

    public short? IdTrasporto { get; set; }

    public short? IdTrasportatore { get; set; }

    public DateTime? DataPartenza { get; set; }

    public DateTime? DataConfermaCliente { get; set; }

    public double? QuantitaSpedita { get; set; }

    public short? IdFornitore { get; set; }

    public bool TrasportoManuale { get; set; }

    public double? CostoTraspManuale { get; set; }

    public double? Sconto { get; set; }

    public double? PrezzoTarget { get; set; }

    public double? MetriQ { get; set; }

    public double? SpeseTrasporto { get; set; }
}
