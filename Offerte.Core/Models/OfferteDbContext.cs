using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Offerte.Core.Models;

public partial class OfferteDbContext : DbContext
{
    public OfferteDbContext()
    {
    }

    public OfferteDbContext(DbContextOptions<OfferteDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Agente> Agente { get; set; }

    public virtual DbSet<AgenteGruppo> AgenteGruppo { get; set; }

    public virtual DbSet<AgentePassword> AgentePassword { get; set; }

    public virtual DbSet<AumentoFarEast> AumentoFarEast { get; set; }

    public virtual DbSet<CalcoloFarEast> CalcoloFarEast { get; set; }

    public virtual DbSet<CirCom> CirCom { get; set; }

    public virtual DbSet<CirTec> CirTec { get; set; }

    public virtual DbSet<CliCom> CliCom { get; set; }

    public virtual DbSet<Cliente> Cliente { get; set; }

    public virtual DbSet<ColoreSerigrafia> ColoreSerigrafia { get; set; }

    public virtual DbSet<ColoreSerigrafiaDesc> ColoreSerigrafiaDesc { get; set; }

    public virtual DbSet<Corrispondente> Corrispondente { get; set; }

    public virtual DbSet<CostoAcquisto> CostoAcquisto { get; set; }

    public virtual DbSet<DocumentoMail> DocumentoMail { get; set; }

    public virtual DbSet<FinituraMeccanica> FinituraMeccanica { get; set; }

    public virtual DbSet<FinituraMeccanicaDesc> FinituraMeccanicaDesc { get; set; }

    public virtual DbSet<FinituraSuperficiale> FinituraSuperficiale { get; set; }

    public virtual DbSet<FinituraSuperficialeDesc> FinituraSuperficialeDesc { get; set; }

    public virtual DbSet<Followup> Followup { get; set; }

    public virtual DbSet<FormatoStandard> FormatoStandard { get; set; }

    public virtual DbSet<Fornitore> Fornitore { get; set; }

    public virtual DbSet<FornitoreDocumentoMail> FornitoreDocumentoMail { get; set; }

    public virtual DbSet<Grafite> Grafite { get; set; }

    public virtual DbSet<GrafiteDesc> GrafiteDesc { get; set; }

    public virtual DbSet<Gruppo> Gruppo { get; set; }

    public virtual DbSet<Label> Label { get; set; }

    public virtual DbSet<Lingua> Lingua { get; set; }

    public virtual DbSet<Materiale> Materiale { get; set; }

    public virtual DbSet<Mezzo> Mezzo { get; set; }

    public virtual DbSet<Offerta> Offerta { get; set; }

    public virtual DbSet<OffertaMontaggio> OffertaMontaggio { get; set; }

    public virtual DbSet<OffertaRiga> OffertaRiga { get; set; }

    public virtual DbSet<OffertaRigaFarEast> OffertaRigaFarEast { get; set; }

    public virtual DbSet<Parametro> Parametro { get; set; }

    public virtual DbSet<Pelabile> Pelabile { get; set; }

    public virtual DbSet<PelabileDesc> PelabileDesc { get; set; }

    public virtual DbSet<PostCalcolo> PostCalcolo { get; set; }

    public virtual DbSet<PreCalcolo> PreCalcolo { get; set; }

    public virtual DbSet<Resa> Resa { get; set; }

    public virtual DbSet<Serigrafia> Serigrafia { get; set; }

    public virtual DbSet<SerigrafiaDesc> SerigrafiaDesc { get; set; }

    public virtual DbSet<Solder> Solder { get; set; }

    public virtual DbSet<SolderDesc> SolderDesc { get; set; }

    public virtual DbSet<SpessoreMateriale> SpessoreMateriale { get; set; }

    public virtual DbSet<SpessoreRame> SpessoreRame { get; set; }

    public virtual DbSet<StatoFarEast> StatoFarEast { get; set; }

    public virtual DbSet<Strato> Strato { get; set; }

    public virtual DbSet<Tendinatura> Tendinatura { get; set; }

    public virtual DbSet<TendinaturaDesc> TendinaturaDesc { get; set; }

    public virtual DbSet<TestElettrico> TestElettrico { get; set; }

    public virtual DbSet<TestElettricoDesc> TestElettricoDesc { get; set; }

    public virtual DbSet<TipoPagamento> TipoPagamento { get; set; }

    public virtual DbSet<TipoProdotto> TipoProdotto { get; set; }

    public virtual DbSet<TipoRigido> TipoRigido { get; set; }

    public virtual DbSet<TipoRigidoDesc> TipoRigidoDesc { get; set; }

    public virtual DbSet<TipoSolder> TipoSolder { get; set; }

    public virtual DbSet<TipoSolderDesc> TipoSolderDesc { get; set; }

    public virtual DbSet<Trasportatore> Trasportatore { get; set; }

    public virtual DbSet<Trasporto> Trasporto { get; set; }

    public virtual DbSet<Valuta> Valuta { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=S-2020-150127\\SQLEXPRESS;Initial Catalog=Offerte;Persist Security Info=False;User Id=sa;Password=sapwd;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Latin1_General_CI_AS");

        modelBuilder.Entity<Agente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Agente__3214EC0703317E3D");

            entity.HasIndex(e => e.RagioneSociale, "key1");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Cap)
                .HasMaxLength(7)
                .IsUnicode(false);
            entity.Property(e => e.CodiceFiscale)
                .HasMaxLength(16)
                .IsUnicode(false);
            entity.Property(e => e.Indirizzo)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Localita)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Mail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.NumeroFax)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.PartitaIva)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("PartitaIVA");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PasswordMail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.RagioneSociale)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Surname)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(18)
                .IsUnicode(false);
        });

        modelBuilder.Entity<AgenteGruppo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AgenteGr__3214EC077F2BE32F");
        });

        modelBuilder.Entity<AgentePassword>(entity =>
        {
            entity.HasKey(e => e.IdAgente).HasName("PK__AgentePa__FAD2D3A60B91BA14");

            entity.Property(e => e.IdAgente).ValueGeneratedNever();
            entity.Property(e => e.IndirizzoMail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.PassworddMail)
                .HasMaxLength(30)
                .IsUnicode(false);

            entity.HasOne(d => d.IdAgenteNavigation).WithOne(p => p.AgentePassword)
                .HasForeignKey<AgentePassword>(d => d.IdAgente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_AgentePassword_Agente");
        });

        modelBuilder.Entity<AumentoFarEast>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AumentoF__3214EC0731B762FC");
        });

        modelBuilder.Entity<CalcoloFarEast>(entity =>
        {
            entity.HasKey(e => e.Nome).HasName("PK__CalcoloF__7D8FE3B32A164134");

            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Formula)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("FORMULA");
        });

        modelBuilder.Entity<CirCom>(entity =>
        {
            entity.HasNoKey();

            entity.HasIndex(e => e.CodiceEdp, "key0").IsUnique();

            entity.HasIndex(e => e.MatricolaCliente, "key1");

            entity.HasIndex(e => e.CodiceInterno, "key2").IsUnique();

            entity.HasIndex(e => e.CodiceCliente, "key3");

            entity.Property(e => e.CodiceEdp).HasColumnName("CodiceEDP");
            entity.Property(e => e.CodiceInterno)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Disegno)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.DummyPoof)
                .HasMaxLength(72)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.MatricolaCliente)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.UltimaDataConsegna).HasColumnType("datetime");
        });

        modelBuilder.Entity<CirTec>(entity =>
        {
            entity.HasNoKey();

            entity.HasIndex(e => e.CodiceEdp, "IX_EDP").IsUnique();

            entity.Property(e => e.CodiceEdp).HasColumnName("CodiceEDP");
            entity.Property(e => e.CodiceLayUp)
                .HasMaxLength(8)
                .IsUnicode(false);
            entity.Property(e => e.DataUltimoUso).HasColumnType("datetime");
            entity.Property(e => e.DirAllegati)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.DorContattiera)
                .HasMaxLength(25)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.FileForatura)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.LatoConnettore)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.MarchioUl).HasColumnName("MarchioUL");
            entity.Property(e => e.StringaTaglio)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.TenumAdattatore).HasColumnName("TENumAdattatore");
            entity.Property(e => e.TenumPuntiTest).HasColumnName("TENumPuntiTest");
            entity.Property(e => e.TipoTestElettrico)
                .HasMaxLength(12)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.UsoFuturo)
                .HasMaxLength(4)
                .IsUnicode(false)
                .IsFixedLength();
        });

        modelBuilder.Entity<CliCom>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CliCom__3214EC07173876EA");

            entity.HasIndex(e => e.RagioneSociale, "key1");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.BancaAppoggio)
                .HasMaxLength(52)
                .IsUnicode(false);
            entity.Property(e => e.Cap)
                .HasMaxLength(7)
                .IsUnicode(false);
            entity.Property(e => e.Cap2)
                .HasMaxLength(7)
                .IsUnicode(false);
            entity.Property(e => e.CodiceContabile)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.CodiceFiscale)
                .HasMaxLength(16)
                .IsUnicode(false);
            entity.Property(e => e.Contattare)
                .HasMaxLength(13)
                .IsUnicode(false);
            entity.Property(e => e.DummyPoof)
                .HasMaxLength(141)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.EMail)
                .HasMaxLength(50)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("eMail");
            entity.Property(e => e.FormaDiPagamento)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Indirizzo)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Indirizzo2)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Localita)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Localita2)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.NumeroFax)
                .HasMaxLength(25)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.PartitaIva)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("PartitaIVA");
            entity.Property(e => e.RagioneSociale)
                .HasMaxLength(40)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.RagioneSociale2)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.Vettore)
                .HasMaxLength(18)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Cliente__3214EC0707020F21");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CodClienteAhr)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.CodMezzo)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.CodNazione)
                .HasMaxLength(3)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ColoreSerigrafia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ColoreSe__3214EC075070F446");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ColoreSerigrafiaDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__ColoreSe__3985682840F9A68C");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Corrispondente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Corrispo__3214EC072DE6D218");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.IndirizzoMail)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<CostoAcquisto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CostoAcq__3214EC072645B050");
        });

        modelBuilder.Entity<DocumentoMail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Document__3214EC071EA48E88");

            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FinituraMeccanica>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Finitura__3214EC07398D8EEE");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FinituraMeccanicaDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__Finitura__3985682844CA3770");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FinituraSuperficiale>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Finitura__3214EC0735BCFE0A");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FinituraSuperficialeDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__Finitura__39856828489AC854");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Followup>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Followup__3214EC07778AC167");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FormatoStandard>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__FormatoS__3214EC073D2915A8");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.DimensioneXsbordato).HasColumnName("DimensioneXSbordato");
            entity.Property(e => e.DimensioneYsbordato).HasColumnName("DimensioneYSbordato");
        });

        modelBuilder.Entity<Fornitore>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Fornitor__3214EC076FE99F9F");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Indirizzo)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.IndirizzoMail)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.RagioneSociale)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FornitoreDocumentoMail>(entity =>
        {
            entity.HasKey(e => new { e.IdFornitore, e.IdDocumentoMail }).HasName("PK__Fornitor__4052F42422751F6C");

            entity.Property(e => e.IndirizzoMail)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Grafite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Grafite__3214EC075BE2A6F2");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<GrafiteDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__GrafiteD__398568284C6B5938");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Gruppo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Gruppo__3214EC077B5B524B");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Label>(entity =>
        {
            entity.HasKey(e => new { e.IdLingua, e.Id }).HasName("PK__Label__DA390C310F624AF8");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Lingua>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__LINGUA__3214EC0702FC7413");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Materiale>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Material__3214EC0722AA2996");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Codice)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Mezzo>(entity =>
        {
            entity.HasKey(e => e.Codice).HasName("PK__Mezzo__0636EC1C3587F3E0");

            entity.Property(e => e.Codice)
                .HasMaxLength(4)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Offerta>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.CodMezzo)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.CodNazione)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.CodiceInterno)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.CondizioniResa)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Criticita).HasColumnName("CRITICITA");
            entity.Property(e => e.DataOfferta).HasColumnType("datetime");
            entity.Property(e => e.DataScadenzaOfferta).HasColumnType("date");
            entity.Property(e => e.DataUltimaModifica).HasColumnType("date");
            entity.Property(e => e.Destinatario)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.DimXfigura).HasColumnName("DimXFigura");
            entity.Property(e => e.DimXsbordato).HasColumnName("DimXSbordato");
            entity.Property(e => e.DimYfigura).HasColumnName("DimYFigura");
            entity.Property(e => e.DimYsbordato).HasColumnName("DimYSbordato");
            entity.Property(e => e.FModificata).HasColumnName("fModificata");
            entity.Property(e => e.FTunisia).HasColumnName("fTunisia");
            entity.Property(e => e.FormaDiPagamento)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.IdTipoRigidoDf).HasColumnName("IdTipoRigidoDF");
            entity.Property(e => e.Listino)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.MatricolCliente)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Note)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.NoteCina)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.NoteCommerciali).HasColumnType("text");
            entity.Property(e => e.NoteFollowUp)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.NoteMaster).HasColumnType("text");
            entity.Property(e => e.NoteMontaggio).HasColumnType("text");
            entity.Property(e => e.Noteinterne)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("NOTEINTERNE");
            entity.Property(e => e.NumCircuitiXcart).HasColumnName("NumCircuitiXCart");
            entity.Property(e => e.NumCircuitiYcart).HasColumnName("NumCircuitiYCart");
            entity.Property(e => e.NumeroOfferta).HasComment("riporta il legacy numeroOfferta");
            entity.Property(e => e.RevisioneDocumento)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Riferimento)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Trasporto)
                .HasMaxLength(18)
                .IsUnicode(false);
        });

        modelBuilder.Entity<OffertaMontaggio>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__OffertaM__3214EC0706CD04F7");

            entity.Property(e => e.Costoacquisto).HasColumnName("COSTOACQUISTO");
        });

        modelBuilder.Entity<OffertaRiga>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__OffertaR__3214EC07117F9D94");

            entity.Property(e => e.CircuitilAnciati).HasColumnName("CIRCUITIlANCIATI");
            entity.Property(e => e.DataQuotazione).HasColumnType("datetime");
            entity.Property(e => e.FCinaAereo).HasColumnName("fCinaAereo");
            entity.Property(e => e.FCinaBlind).HasColumnName("fCinaBlind");
            entity.Property(e => e.FCinaFast).HasColumnName("fCinaFast");
            entity.Property(e => e.FCinaNave).HasColumnName("fCinaNave");
            entity.Property(e => e.FFobHk).HasColumnName("fFobHK");
            entity.Property(e => e.PrezzoDcmQeuro).HasColumnName("PrezzoDcmQEuro");
            entity.Property(e => e.PrezzoDcmQval).HasColumnName("PrezzoDcmQVal");
        });

        modelBuilder.Entity<OffertaRigaFarEast>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RigaFarE__3214EC070DAF0CB0");

            entity.Property(e => e.DataArrivo).HasColumnType("datetime");
            entity.Property(e => e.DataConfermaCliente).HasColumnType("datetime");
            entity.Property(e => e.DataConsegna).HasColumnType("datetime");
            entity.Property(e => e.DataPartenza).HasColumnType("datetime");
        });

        modelBuilder.Entity<Parametro>(entity =>
        {
            entity.HasKey(e => e.Codice).HasName("PK__Parametr__0636EC1C1332DBDC");

            entity.Property(e => e.Codice)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Tipo)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.Valore)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Pelabile>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Pelabile__3214EC075812160E");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PelabileDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__Pelabile__39856828503BEA1C");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PostCalcolo>(entity =>
        {
            entity.HasKey(e => e.Nome).HasName("PK__PostCalc__7D8FE3B31AD3FDA4");

            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Formula)
                .HasMaxLength(2000)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PreCalcolo>(entity =>
        {
            entity.HasKey(e => e.Nome).HasName("PK__PreCalco__7D8FE3B317036CC0");

            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Formula)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Resa>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Resa__3214EC076B24EA82");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Codice)
                .HasMaxLength(3)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Serigrafia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Serigraf__3214EC074CA06362");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SerigrafiaDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__Serigraf__39856828540C7B00");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Solder>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Solder__3214EC073E52440B");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SolderDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__SolderDe__3985682857DD0BE4");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SpessoreMateriale>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Spessore__3214EC07267ABA7A");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SpessoreRame>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Spessore__3214EC072A4B4B5E");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StatoFarEast>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__StatoFar__3214EC07395884C4");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Strato>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Strati__3214EC071ED998B2");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Tendinatura>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tendinat__3214EC075FB337D6");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TendinaturaDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__Tendinat__398568285BAD9CC8");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TestElettrico>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TestElet__3214EC075441852A");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TestElettricoDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__TestElet__398568285F7E2DAC");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoPagamento>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoPaga__3214EC0773BA3083");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoProdotto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoProd__3214EC072E1BDC42");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CodicePerLayup)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PesoKgmetroQ).HasColumnName("PesoKGMetroQ");
        });

        modelBuilder.Entity<TipoRigido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoRigi__3214EC0731EC6D26");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoRigidoDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__TipoRigi__39856828634EBE90");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoSolder>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoSold__3214EC0747DBAE45");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoSolderDesc>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.IdLingua }).HasName("PK__TipoSold__39856828671F4F74");

            entity.Property(e => e.Descrizione)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Trasportatore>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.IndirizzoMail)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Trasporto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Trasport__3214EC076383C8BA");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Codice)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Valuta>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Valute__3214EC071B0907CE");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Codice)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.DescrBreve)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Descrizione)
                .HasMaxLength(20)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.DummyPoof)
                .HasMaxLength(98)
                .IsUnicode(false)
                .IsFixedLength();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
