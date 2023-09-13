using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class FornitoreDocumentoMail
{
    public short IdFornitore { get; set; }

    public byte IdDocumentoMail { get; set; }

    public string? IndirizzoMail { get; set; }
}
