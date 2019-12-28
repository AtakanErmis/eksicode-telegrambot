# eksiCode Telegram Botu

## Nedir

Bu script, http://eksicode.org telegram grupları üzerindeki kayıtlı üye sayılarını ölçmek
ve chat geliştirmeleri için yazılmaktadır.

### Nasıl Çalıştırılır

-   UYARI: Docker çalışırken git branch'ını değiştirmeyin. 

-   Paketleri yükleyin: `npm i`

-   sample.env dosyasındaki örnek ayarlara göre bir .env dosyası oluşturun.

-   Docker'ı çalıştırın: `docker-compose up --build`

## Bot Komutları

### Genel

-   `/help` - Komutları listeler.

-   `/yardim` - Komutları listeler.

-   `/kaynak <URL>`: Kaynak URL'sini Ekşicode veritabanına ekler.

-   `/kanal <Sorgu | tümü>` - kanalları listeler.

-   `/discord` -  Discord sunucumuz.

### Yönetim Komutları

-   `/pin <mesaj>`: Mesajı tüm EksiCode kanallarında gönderir ve sabitler.

-   `/ban`: Forward edilmiş mesajı alıntılayarak kullanılır. Forward edilen kişiyi tüm EksiCode kanallarından atar.

## Hata Mesajları

Siz de bu repoyu forklayıp `hataMesaji.txt` dosyası içerisine hata mesajı için ünlem ekleyebilirsiniz.

## .pinignore dosyası

`/pin` komutunun çalışmamasını istediğiniz kanalın ID'lerini .pinignore dosyasına ekleyerek istisnalar oluşturabilirsiniz.
