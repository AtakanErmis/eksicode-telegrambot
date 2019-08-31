const fetch = require("node-fetch");
const { parse } = require("node-html-parser");
const replyConfig = require("./replyConfig");

function kaynakCommand(ctx) {
    ctx.reply("Kaynak komutu şimdilik çalışmıyor. Gönderdiğiniz linkleri sonradan işleyip veritabanımıza yükleyeceğiz.", replyConfig(ctx.message.message_id))
    /*fetch("http://api.eksicode.org/auth/local", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier: process.env.API_USER,
            password: process.env.API_PASS
        })
    })
        .then(res => res.json())
        .then(info => {
            const args = ctx.state.command.splitArgs;
            const url = args[0].startsWith("http")
                ? args[0]
                : "http://" + args[0];
            fetch(url)
                .then(res => res.text())
                .then(html => {
                    let title;
                    try {
                        title = parse(html).querySelector("title").rawText;
                    } catch {
                        title = url;
                    }
                    const requestData = {
                        doc_name: title,
                        doc_link: url,
                        doc_creator_tg: ctx.message.from.id,
                        doc_tg_ch: ctx.message.chat.id.toString()
                    };
                    fetch("http://api.eksicode.org/kaynaklars", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + info.jwt
                        },
                        body: JSON.stringify(requestData)
                    })
                        .then(res => res.json())
                        .then(out => {
                            if (out.error) {
                                ctx.reply(
                                    `Hata ${out.statusCode}: Eksicode sunucularıyla bağlantı kuramıyoruz. Lütfen daha sonra deneyin.`,
                                    replyConfig(ctx.message.message_id)
                                );
                            }
                            ctx.reply(
                                `Teşekkürler ${ctx.from.first_name}! Yönetici ekibimiz en kısa zamanda inceleyip onaylayacak.`,
                                replyConfig(ctx.message.message_id)
                            );
                        })
                        .catch(err =>
                            ctx.reply(
                                "Eksicode sunucularıyla bağlantı kuramıyoruz. Lütfen daha sonra deneyin.",
                                replyConfig(ctx.message.message_id)
                            )
                        );
                })
                .catch(err => {
                    if (err.name == "TypeError") {
                        ctx.reply(
                            "Geçersiz kullanım. Kullanım: /kaynak <link>",
                            replyConfig(ctx.message.message_id)
                        );
                        console.error(err);
                    } else if (err.name == "FetchError") {
                        ctx.reply(
                            "Link geçersiz. Lütfen tekrar deneyin.",
                            replyConfig(ctx.message.message_id)
                        );
                    }
                });
        });*/
}

module.exports = kaynakCommand;
