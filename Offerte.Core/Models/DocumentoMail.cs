using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class DocumentoMail
{
    public long Id { get; set; }

    public string? Descrizione { get; set; }

    public virtual ICollection<FornitoreDocumentoMail> FornitoreDocumentoMail { get; set; } = new List<FornitoreDocumentoMail>();
}
