using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Offerta
{
    public int Id { get; set; }

    public int IdUtente { get; set; }

    public int IdAgente { get; set; }

    public DateTime DataOfferta { get; set; }

    public string? MatricolCliente { get; set; }

    public string? CodiceInterno { get; set; }

    public int IdCliente { get; set; }

    public double? DimXfigura { get; set; }

    public double? DimYfigura { get; set; }

    public double? DimTaglioX { get; set; }

    public double? DimTaglioY { get; set; }

    public double? DimXsbordato { get; set; }

    public double? DimYsbordato { get; set; }

    public short? NumCircuitiXcart { get; set; }

    public short? NumCircuitiYcart { get; set; }

    public short? CodTipoProdotto { get; set; }

    public short? Criticita { get; set; }

    public double? InterspazioMassimo { get; set; }

    public double? InterspazioMinimo { get; set; }

    public double? BordoTecnicoMassimo { get; set; }

    public double? BordoTecnicoMinimo { get; set; }

    public short? CodMaterialeTec { get; set; }

    public double? SpessRame { get; set; }

    public double? SpessoreFinale { get; set; }

    public short? FinituraSuperficiale { get; set; }

    public short? FinituraMeccanica { get; set; }

    public short? NumeroAsole { get; set; }

    public short? DoraturaContattiera { get; set; }

    public byte? StatoOfferta { get; set; }

    public short? Solder { get; set; }

    public short? TipoSolder { get; set; }

    public short? Serigrafia { get; set; }

    public short? ColoreSerigrafia { get; set; }

    public short? NumForiPerCartella { get; set; }

    public double? DiametroMinForo { get; set; }

    public double? DiametroMaxForo { get; set; }

    public short? TestElettrico { get; set; }

    public byte? TestSondeMobili { get; set; }

    public short? NumTagliScoring { get; set; }

    public double? ScartoPrevisto { get; set; }

    public DateTime DataScadenzaOfferta { get; set; }

    public short? Divisa { get; set; }

    public double? PerimetroFresatura { get; set; }

    public string? FormaDiPagamento { get; set; }

    public string? Trasporto { get; set; }

    public bool OttimizzaInUnVerso { get; set; }

    public short? Pelabile { get; set; }

    public string? CondizioniResa { get; set; }

    public string? Note { get; set; }

    public bool Attrezzatura { get; set; }

    public bool AttrezzaturaTest { get; set; }

    public bool FresaSi { get; set; }

    public bool MicroForatura { get; set; }

    public bool FineLine { get; set; }

    public double? AttrezzaturaAdd { get; set; }

    public double? AttrezzaturaTestAdd { get; set; }

    public string? Riferimento { get; set; }

    public string? Destinatario { get; set; }

    public bool ControlloSede { get; set; }

    public string? Listino { get; set; }

    public bool FModificata { get; set; }

    public DateTime? DataUltimaModifica { get; set; }

    public string? RevisioneDocumento { get; set; }

    public short? CodGrafite { get; set; }

    public bool PressFit { get; set; }

    public short? CodTendinatura { get; set; }

    public short? SeqForiCiechi { get; set; }

    public short? SeqForiInterrati { get; set; }

    public bool ImpedenzaControllata { get; set; }

    public double? CostoLottoCina { get; set; }

    public short? ValutaAcquisto { get; set; }

    public short? IdTrasporto { get; set; }

    public short? IdResa { get; set; }

    public string? NoteCina { get; set; }

    public short? IdFornitore { get; set; }

    public short? CodTipoPagamento { get; set; }

    public short? IdTrasportatore { get; set; }

    public short? CodStatoFarEast { get; set; }

    public string? NoteCommerciali { get; set; }

    public short? IdFollowUp { get; set; }

    public string? NoteFollowUp { get; set; }

    public short? CodLingua { get; set; }

    public short? IdTrasportoIta { get; set; }

    public string? CodNazione { get; set; }

    public string? CodMezzo { get; set; }

    public bool Stencil { get; set; }

    public double? AttrezzaturaStencil { get; set; }

    public int? NumeroStencil { get; set; }

    public string? NoteMontaggio { get; set; }

    public short? IdTipoRigidoDf { get; set; }

    public double? SpessoreInnerLayer { get; set; }

    public double? SpessRameInnerLayer { get; set; }

    public string? NoteMaster { get; set; }

    public bool FTunisia { get; set; }

    public string? Noteinterne { get; set; }

    public bool ProgrammiMacchina { get; set; }

    public double? MinProgrammiMacchina { get; set; }

    public int? ComponentiSmd { get; set; }

    public int? ComponentiPth { get; set; }

    /// <summary>
    /// riporta il legacy numeroOfferta
    /// </summary>
    public int? NumeroOfferta { get; set; }
}
