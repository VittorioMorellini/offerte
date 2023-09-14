using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Corrispondente
{
    public long Id { get; set; }

    public string? Descrizione { get; set; }

    public string? IndirizzoMail { get; set; }

    public virtual ICollection<Trasporto> Trasporto { get; set; } = new List<Trasporto>();
}
