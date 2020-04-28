$(function () {

  function buildHTML(message) {
    if (message.image) {
      var html =
        `<div class="message">
          <div class="message-info">
            <div class="message-info__talker">
              ${ message.user_name}
            </div>
            <div class="message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-box">
            <p class="message-box__content">
              ${message.content}
            </p>
            <img src=" ${message.image} " class="message-box__image" >
          </div>
        </div>`
    } else {
      var html =
        `<div class="message">
          <div class="message-info">
            <div class="message-info__talker">
              ${ message.user_name}
            </div>
            <div class="message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-box">
            <p class="message-box__content">
              ${message.content}
            </p>
          </div>
        </div>`
    }
    return html
  }

  $('#new_message').on('submit', function (e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
        $('form')[0].reset();
        $('.submit-btn').prop('disabled', false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
      })
  })
})