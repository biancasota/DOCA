$(document).on('ready page:load', function () {  
  $('#curso_id').change(function(event) {    
    var select_periodo = $('select#periodo');
    var CursoId = $(event.currentTarget);
    var idPeriodo = document.getElementById("idPeriodo");
    
    $.ajax({
      type:"GET",
      url:"/cursos",
      dataType:"json",
      data: {curso_id: CursoId.val()},
      success:function(result) {
        select_periodo.empty().append("Selecione");
        select_periodo.append($('<option>').attr('value', "").text("Selecione"));        
        select_periodo.attr('disabled', true);          
        
        if (result.quantidadePeriodo > 0)
          idPeriodo.style.display = 'block';
        else
          idPeriodo.style.display = 'none';

        for (var i = 1; i <= result.quantidadePeriodo; i++) {
          select_periodo.append($('<option>').attr('value', i).text(i));
          select_periodo.attr('disabled', false);
        }        
      }
    });
  });
});