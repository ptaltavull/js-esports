function abrirAvisoLegal() {
  console.log("onclick");
  const ventana = window.open(
    "",
    "Aviso legal",
    "width=600,height=700,scrollbars=0,overflow-y=hidden"
  );

  ventana.document.body.innerHTML = `
  <p>CONDICIONES DE USO. NOTA LEGAL</p>

  <p>Finalidades</p>
  <p>En ASSOCIACIÓ DEPORTIVA CIUTADELLA utilizamos sus datos en la medida en que sea permitido por el RGPD, así como por la normativa vigente que sea de aplicación. En todo caso el tratamiento se hará para fines determinados, explícitos y legítimos, y en ningún caso serán tratados de manera incompatible para dichos fines. En concreto se llevarán a cabo los siguientes tratamientos:</p>
    <p>
      Contestar a sus consultas, solicitudes o peticiones.
      Para el correcto desempeño del servicio solicitado, se tratarán los datos de salud del usuario necesarios para un seguimiento de la evolución del mismo durante la prestación del servicio. Gestionar la relación contractual y la prestación de los servicios de consulta solicitados por el usuario.
      Gestionar sus llamadas telefónicas.
      Emitir justificantes de cobro por los servicios prestados en favor del usuario.
      Para el correcto desempeño del servicio solicitado, se tratarán los datos personales del usuario necesarios para un seguimiento de la evolución de este durante la prestación del servicio.
      Realizar todos aquellos trámites administrativos, fiscales y contables necesarios para cumplir con nuestros compromisos contractuales y obligaciones fiscales y contables.
      Cumplimiento de nuestras obligaciones legales.
      Analizar y mejorar nuestros servicios y comunicaciones con usted.
      Supervisar y evaluar el cumplimiento de nuestras políticas y normas.
      Gestionar envío de información y prospección comercial por cualquier vía en caso de consentimiento explícito.
  </p>
  `;
}
