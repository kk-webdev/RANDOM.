
/* =========================================
   BİLMEDİĞİN ŞEYLER
   Ana sistem
========================================= */

const overlay = document.getElementById("experienceOverlay");
const experienceContent = document.getElementById("experienceContent");
const closeButton = document.getElementById("closeExperience");

const enterButton = document.getElementById("enterButton");
const randomButton = document.getElementById("randomButton");

const categoryCards = document.querySelectorAll(".category-card");

const discoveryCounter = document.getElementById("discoveryCounter");
const secretMessage = document.getElementById("secretMessage");


/* =========================================
   KATEGORİ BİLGİLERİ
========================================= */

const categories = {

    facts: {
        emoji: "🧠",
        number: "01",
        title: "Bunu biliyor muydun?",
        subtitle: "Gerçekler bazen uydurmalardan daha garip."
    },

    random: {
        emoji: "🎲",
        number: "02",
        title: "Rastgele bir şey",
        subtitle: "Buraya basmak tamamen senin kararındı."
    },

    brain: {
        emoji: "🤯",
        number: "03",
        title: "Beynini yak",
        subtitle: "Birazdan kendinden şüphe etmeye başlayabilirsin."
    },

    illusion: {
        emoji: "👀",
        number: "04",
        title: "Gözlerine güveniyor musun?",
        subtitle: "Beynin gördüğün şeyi sandığından daha fazla değiştiriyor."
    },

    predict: {
        emoji: "🎯",
        number: "05",
        title: "Seni tahmin edeceğim",
        subtitle: "Aklından geçen şeyi gerçekten saklayabilir misin?"
    },

    real: {
        emoji: "🕵️",
        number: "06",
        title: "Hangisi gerçek?",
        subtitle: "Üç bilgi. Biri tamamen sallama."
    },

    world: {
        emoji: "🌍",
        number: "07",
        title: "Dünyada şu an...",
        subtitle: "Sen burada dururken dünya durmuyor."
    },

    disturbing: {
        emoji: "💀",
        number: "08",
        title: "Rahatsız edici bilgiler",
        subtitle: "Bu bölümden sonra bazı şeylere farklı bakabilirsin."
    },

    tests: {
        emoji: "😂",
        number: "09",
        title: "Saçma testler",
        subtitle: "Bilim insanları bu testleri kesinlikle onaylamıyor."
    },

    fortune: {
        emoji: "🔮",
        number: "10",
        title: "Bugünkü kaderin",
        subtitle: "İnternet geleceğin hakkında kararını verdi."
    },

    games: {
        emoji: "🎮",
        number: "11",
        title: "Mini oyunlar",
        subtitle: "Hiçbir işe yaramayan yeteneklerini test et."
    },

    experiments: {
        emoji: "🧪",
        number: "12",
        title: "İnsan beyni çok garip",
        subtitle: "Denek sensin."
    }

};

/* =========================================
   01 - BUNU BİLİYOR MUYDUN?
========================================= */

const amazingFacts = [

    // =====================================================
    // 01 — UZAY / GÜNEŞ SİSTEMİ
    // =====================================================

    {
        icon: "🪐",
        title: "Venüs'te bir gün, bir yıldan daha uzundur.",
        text: "Venüs'ün kendi ekseni etrafındaki dönüşü yaklaşık 243 Dünya günü sürerken Güneş çevresindeki bir turu yaklaşık 225 Dünya günü sürer.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/venus/venus-facts/"
    },

    {
        icon: "🌅",
        title: "Venüs çoğu gezegenin ters yönünde döner.",
        text: "Venüs'ün dönüş yönü çoğu gezegenin tersidir. Bu nedenle yüzeyinden bakıldığında Güneş batıdan doğup doğudan batardı.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/venus/venus-facts/"
    },

    {
        icon: "🔥",
        title: "Güneş'e en yakın gezegen, en sıcak gezegen değildir.",
        text: "Merkür Güneş'e en yakın gezegendir fakat yoğun atmosferinin oluşturduğu güçlü sera etkisi nedeniyle en sıcak gezegen Venüs'tür.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "🌕",
        title: "Ay yavaş yavaş Dünya'dan uzaklaşıyor.",
        text: "Ay'ın Dünya'ya olan uzaklığı her yıl yaklaşık birkaç santimetre artıyor.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/moon/facts/"
    },

    {
        icon: "🌕",
        title: "Ay'ın bize hep aynı tarafını göstermesinin bir nedeni var.",
        text: "Ay'ın kendi eksenindeki dönüş süresi ile Dünya çevresindeki dolanma süresi aynıdır. Buna eşzamanlı dönüş denir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/moon/facts/"
    },

    {
        icon: "🌑",
        title: "Ay'ın 'karanlık yüzü' aslında sürekli karanlık değildir.",
        text: "Ay'ın Dünya'dan göremediğimiz uzak tarafı da Güneş ışığı alır. Bu nedenle 'karanlık yüz' ifadesi bilimsel olarak yanıltıcıdır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/moon/facts/"
    },

    {
        icon: "🌕",
        title: "Ay'ın Dünya çevresindeki bir turu yaklaşık 27 gün sürer.",
        text: "Ay hem kendi ekseninde yaklaşık 27 günde döner hem de Dünya çevresindeki yörüngesini yaklaşık aynı sürede tamamlar.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/moon/facts/"
    },

    {
        icon: "🌕",
        title: "Ay yaklaşık 384 bin kilometre uzaktadır.",
        text: "Dünya ile Ay arasındaki ortalama mesafe yaklaşık 384.000 kilometredir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/moon/facts/"
    },

    {
        icon: "💥",
        title: "Ay muhtemelen dev bir çarpışmanın ardından oluştu.",
        text: "Bilimsel modele göre genç Dünya'ya Mars büyüklüğünde bir cismin çarpmasıyla uzaya saçılan maddeler zamanla birleşerek Ay'ı oluşturdu.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/moon/facts/"
    },

    {
        icon: "🌌",
        title: "Güneş Sistemi Samanyolu'nun merkezinde değildir.",
        text: "Güneş Sistemi, Samanyolu'nun Orion Kolu veya Orion Çıkıntısı olarak adlandırılan küçük bir bölümünde bulunur.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "🌌",
        title: "Güneş Sistemi galakside yaklaşık 828.000 km/saat hızla ilerler.",
        text: "Güneş Sistemi, Samanyolu'nun merkezi çevresinde yaklaşık 828 bin kilometre/saat hızla yörüngede hareket eder.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "🌌",
        title: "Bir galaktik yıl yaklaşık 230 milyon Dünya yılıdır.",
        text: "Güneş Sistemi'nin Samanyolu'nun merkezi çevresindeki tek bir turunu tamamlaması yaklaşık 230 milyon yıl sürer.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "☀️",
        title: "Güneş Sistemi yaklaşık 4,6 milyar yaşındadır.",
        text: "Güneş Sistemi yaklaşık 4,6 milyar yıl önce yoğun bir yıldızlararası gaz ve toz bulutundan oluşmaya başladı.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "☀️",
        title: "Güneş, sistemdeki maddenin %99'undan fazlasını topladı.",
        text: "Güneş Sistemi oluşurken merkezde oluşan Güneş mevcut maddenin %99'undan fazlasını bünyesinde topladı.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "🪐",
        title: "Güneş Sistemi'nde sekiz gezegen vardır.",
        text: "Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs ve Neptün Güneş Sistemi'nin sekiz gezegenidir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "☄️",
        title: "Güneş Sistemi'nde binlerce asteroit ve kuyrukluyıldız bulunur.",
        text: "Gezegenlerin yanında Güneş Sistemi binlerce asteroit ve kuyrukluyıldız ile çok sayıda küçük gökcismi içerir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    {
        icon: "🪨",
        title: "Asteroit kuşağındaki maddeler bir gezegen oluşturamadı.",
        text: "Güneş Sistemi oluşurken asteroit kuşağındaki maddeler tek bir gezegen halinde birleşemedi ve küçük cisimler olarak kaldı.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/solar-system/solar-system-facts/"
    },

    // =====================================================
    // MERKÜR
    // =====================================================

    {
        icon: "☿️",
        title: "Merkür Güneş Sistemi'nin en küçük gezegenidir.",
        text: "Merkür, sekiz gezegen arasında hem Güneş'e en yakın hem de boyut olarak en küçük gezegendir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "☿️",
        title: "Merkür'de bir yıl sadece 88 Dünya günüdür.",
        text: "Merkür Güneş çevresindeki yörüngesini yalnızca 88 Dünya gününde tamamlar.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "☿️",
        title: "Merkür'de bir tam gündüz-gece döngüsü 176 Dünya günü sürer.",
        text: "Merkür'ün Güneş'e göre bir tam gündüz-gece döngüsü yaklaşık 176 Dünya günüdür.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "🔥",
        title: "Merkür'de gündüz sıcaklığı yaklaşık 430°C'ye ulaşabilir.",
        text: "Güneş'e çok yakın olan Merkür'ün gündüz tarafında sıcaklık yaklaşık 430°C'ye çıkabilir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "🥶",
        title: "Merkür geceleri yaklaşık -180°C'ye kadar soğuyabilir.",
        text: "Isıyı tutacak yoğun bir atmosferi bulunmadığı için Merkür'ün gece tarafı son derece soğuk olabilir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "☿️",
        title: "Merkür'ün hiçbir uydusu yoktur.",
        text: "Güneş Sistemi'nin en küçük gezegeni Merkür'ün doğal uydusu bulunmaz.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "💍",
        title: "Merkür'ün halkası da yoktur.",
        text: "Merkür çevresinde Satürn veya diğer dev gezegenlerde görülen türden bir halka sistemi bulunmaz.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "☀️",
        title: "Merkür'den bakıldığında Güneş üç kattan fazla büyük görünebilir.",
        text: "Merkür Güneş'e çok yakın olduğu için yüzeyinden görülen Güneş, Dünya'dan gördüğümüzden üç kattan fazla büyük görünebilir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    {
        icon: "💡",
        title: "Merkür'deki güneş ışığı Dünya'dakinden yedi kata kadar parlak olabilir.",
        text: "Güneş'e yakınlığı nedeniyle Merkür yüzeyine ulaşan güneş ışığı Dünya'dakinden çok daha güçlüdür.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mercury/facts/"
    },

    // =====================================================
    // MARS
    // =====================================================

    {
        icon: "🔴",
        title: "Mars'ın kırmızı rengi pasla bağlantılıdır.",
        text: "Mars toprağındaki demir mineralleri oksitlenir; yani paslanır. Bu durum gezegene karakteristik kırmızı rengini verir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "🔴",
        title: "Mars Dünya'nın yaklaşık yarısı büyüklüğündedir.",
        text: "Mars'ın yarıçapı yaklaşık 3.390 kilometredir ve bu değer Dünya'nın yarıçapının yaklaşık yarısıdır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "🌄",
        title: "Mars'ta bir gün Dünya'dakine çok yakındır.",
        text: "Mars'ın kendi ekseni etrafındaki dönüşü yaklaşık 24,6 saat sürer. Mars günlerine 'sol' adı verilir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "📅",
        title: "Mars'ta bir yıl 687 Dünya günü sürer.",
        text: "Mars Güneş çevresindeki bir turunu yaklaşık 687 Dünya gününde tamamlar.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "🍂",
        title: "Mars'ta da mevsimler vardır.",
        text: "Mars'ın eksen eğikliği Dünya'nınkine benzer olduğu için gezegende belirgin mevsimler yaşanır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "🌊",
        title: "Mars geçmişte bugünkünden çok daha ıslaktı.",
        text: "NASA görevleri Mars'ın milyarlarca yıl önce daha sıcak, daha kalın atmosferli ve çok daha fazla sıvı suya sahip olduğuna dair güçlü kanıtlar buldu.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "💍",
        title: "Mars'ın bugün halkası yoktur.",
        text: "Mars'ın günümüzde bir halka sistemi bulunmaz.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    {
        icon: "🛰️",
        title: "Mars, başka bir gezegende dolaşan gezgin araçlar gönderdiğimiz tek gezegendir.",
        text: "Mars, insanlığın yüzeyinde rover adı verilen gezgin robotları çalıştırdığı tek gezegendir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/mars/facts/"
    },

    // =====================================================
    // JÜPİTER
    // =====================================================

    {
        icon: "🟠",
        title: "Jüpiter Güneş Sistemi'nin en büyük gezegenidir.",
        text: "Jüpiter, diğer tüm gezegenlerden çok daha büyüktür ve Güneş'ten beşinci sırada yer alır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🌍",
        title: "İçi boş olsaydı Jüpiter'e yaklaşık 1.000 Dünya sığabilirdi.",
        text: "Jüpiter'in devasa hacmini anlatmak için NASA, içi boş bir kabuk olması halinde içine yaklaşık bin Dünya sığabileceğini belirtiyor.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "⏱️",
        title: "Güneş Sistemi'ndeki en kısa gün Jüpiter'dedir.",
        text: "Jüpiter kendi ekseni etrafında yaklaşık 9,9 saatte döner.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🌪️",
        title: "Jüpiter'in Büyük Kırmızı Lekesi dev bir fırtınadır.",
        text: "Büyük Kırmızı Leke, Dünya'dan daha geniş olabilen ve yüzlerce yıldır gözlenen devasa bir fırtına sistemidir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🌋",
        title: "Io, Güneş Sistemi'nin volkanik açıdan en aktif dünyasıdır.",
        text: "Jüpiter'in uydusu Io, Güneş Sistemi'nde bilinen en yoğun volkanik etkinliğe sahip gökcismidir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🌕",
        title: "Ganymede, Merkür gezegeninden bile büyüktür.",
        text: "Jüpiter'in uydusu Ganymede, Güneş Sistemi'nin en büyük uydusudur ve Merkür'den daha büyüktür.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🌊",
        title: "Europa'nın buzlarının altında dev bir okyanus olabilir.",
        text: "Jüpiter'in uydusu Europa'nın buzlu kabuğunun altında geniş bir sıvı su okyanusu bulunduğuna dair güçlü kanıtlar vardır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "💍",
        title: "Jüpiter'in de halkaları vardır.",
        text: "Satürn kadar belirgin olmasa da Jüpiter'in küçük ve karanlık parçacıklardan oluşan bir halka sistemi bulunur.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🚀",
        title: "Jüpiter'in halkaları 1979'da Voyager 1 tarafından keşfedildi.",
        text: "NASA'nın Voyager 1 uzay aracı 1979 yılında Jüpiter'in daha önce bilinmeyen halka sistemini ortaya çıkardı.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "☀️",
        title: "Jüpiter'in ana bileşenleri Güneş'inkilere benzer.",
        text: "Jüpiter'in yapısında ağırlıklı olarak hidrojen ve helyum bulunur.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    // =====================================================
    // SATÜRN
    // =====================================================

    {
        icon: "🪐",
        title: "Satürn Güneş Sistemi'nin ikinci büyük gezegenidir.",
        text: "Satürn yalnızca Jüpiter'den küçüktür ve Güneş'ten altıncı gezegendir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "🪐",
        title: "Satürn Dünya'dan yaklaşık dokuz kat daha geniştir.",
        text: "Satürn'ün ekvator çapı yaklaşık 120.500 kilometredir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "⏱️",
        title: "Satürn'de bir gün yalnızca yaklaşık 10,7 saattir.",
        text: "Devasa boyutuna rağmen Satürn kendi ekseni etrafında son derece hızlı döner.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "📅",
        title: "Satürn'de bir yıl yaklaşık 29,4 Dünya yılıdır.",
        text: "Satürn'ün Güneş çevresindeki tek bir turu yaklaşık 10.756 Dünya günü sürer.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "💧",
        title: "Satürn'ün ortalama yoğunluğu sudan daha düşüktür.",
        text: "Satürn, Güneş Sistemi'nde ortalama yoğunluğu sudan düşük olan tek gezegendir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "🌊",
        title: "Satürn'ün bazı uydularında iç okyanuslar bulunabilir.",
        text: "Enceladus ve Titan gibi Satürn uydularının iç kısımlarında okyanuslar bulunduğuna dair kanıtlar vardır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "💦",
        title: "Enceladus uzaya su püskürtür.",
        text: "Satürn'ün uydusu Enceladus'un yüzeyinden uzaya su ve buz parçacıkları püskürten jetler gözlenmiştir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "🌊",
        title: "Titan'ın yüzeyinde sıvı göller vardır.",
        text: "Satürn'ün büyük uydusu Titan'ın yüzeyinde sıvı hidrokarbonlardan oluşan göller ve denizler bulunur.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    // =====================================================
    // URANÜS & NEPTÜN
    // =====================================================

    {
        icon: "🔵",
        title: "Uranüs adeta yan yatmış halde döner.",
        text: "Uranüs'ün eksen eğikliği yaklaşık 97,77 derecedir; bu yüzden gezegen yörüngesinde yuvarlanan bir top gibi görünür.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "🔭",
        title: "Uranüs teleskop yardımıyla keşfedilen ilk gezegendir.",
        text: "William Herschel Uranüs'ü 1781'de gözlemledi. Başlangıçta onu bir kuyrukluyıldız veya yıldız sanmıştı.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "💍",
        title: "Uranüs'ün 13 soluk halkası vardır.",
        text: "Uranüs yalnızca yan yatmış dönüşüyle değil, çevresindeki soluk halka sistemiyle de dikkat çeker.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "⏱️",
        title: "Uranüs'te bir gün yaklaşık 17 saattir.",
        text: "Uranüs kendi ekseni etrafındaki bir dönüşünü yaklaşık 17 saatte tamamlar.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "📅",
        title: "Uranüs'te bir yıl 84 Dünya yılı sürer.",
        text: "Uranüs'ün Güneş çevresindeki bir tam turu yaklaşık 30.687 Dünya günüdür.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "🔵",
        title: "Neptün çıplak gözle görülemeyen tek gezegendir.",
        text: "Neptün Güneş Sistemi'nin en uzak büyük gezegenidir ve Dünya'dan çıplak gözle görülemez.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "🧮",
        title: "Neptün matematik kullanılarak bulunan ilk gezegendir.",
        text: "Uranüs'ün yörüngesindeki sapmalar incelenerek bilinmeyen bir gezegenin konumu matematiksel olarak tahmin edildi ve Neptün 1846'da gözlendi.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "☀️",
        title: "Güneş ışığının Neptün'e ulaşması yaklaşık dört saat sürer.",
        text: "Neptün Güneş'ten ortalama yaklaşık 4,5 milyar kilometre uzaktadır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "🌕",
        title: "Triton, Neptün'ün dönüş yönünün tersine dolanır.",
        text: "Triton, Güneş Sistemi'ndeki büyük uydular arasında gezegeninin dönüş yönüne ters yörüngede hareket etmesiyle dikkat çeker.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "🥶",
        title: "Triton'un yüzeyi yaklaşık -235°C olabilir.",
        text: "Neptün'ün en büyük uydusu Triton, Güneş Sistemi'nin son derece soğuk dünyalarından biridir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "💨",
        title: "Triton'da kilometrelerce yükselen buz püskürmeleri gözlendi.",
        text: "Voyager 2, Triton'da buzlu maddeleri yaklaşık 8 kilometre yüksekliğe püskürten oluşumlar gözlemledi.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    // =====================================================
    // DÜNYA & OKYANUS
    // =====================================================

    {
        icon: "🌊",
        title: "Dünya'daki suyun yaklaşık %97'si okyanuslardadır.",
        text: "Gezegenimiz suyla kaplı görünse de bu suyun yaklaşık %97'si tuzlu okyanus suyudur.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceanwater.html"
    },

    {
        icon: "🌎",
        title: "Okyanuslar Dünya yüzeyinin %70'inden fazlasını kaplar.",
        text: "Dünya yüzeyinin büyük çoğunluğu okyanuslarla kaplıdır.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceanwater.html"
    },

    {
        icon: "🧊",
        title: "Dünya suyunun yaklaşık %2'si buzullarda ve buz örtülerinde bulunur.",
        text: "Okyanuslar dışında kalan suyun önemli bir kısmı donmuş halde buzullarda ve buz örtülerinde depolanır.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceanwater.html"
    },

    {
        icon: "💧",
        title: "Dünya suyunun %1'inden azı tatlı sudur.",
        text: "Toplam suyun çok küçük bir bölümü tatlı sudur; erişilebilir tatlı su miktarı bundan da azdır.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceanwater.html"
    },

    {
        icon: "💧",
        title: "Dünya'da yaklaşık 1,386 milyar km³ su vardır.",
        text: "USGS verilerine dayanan NOAA hesabına göre gezegenimizde yaklaşık 1,386 milyar kilometreküp su bulunur.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceanwater.html"
    },

    {
        icon: "🌊",
        title: "Okyanuslarda yaklaşık 1,335 milyar km³ su bulunur.",
        text: "Dünya'nın toplam su miktarının çok büyük bölümü okyanuslarda depolanmıştır.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceanwater.html"
    },

    {
        icon: "⬇️",
        title: "Okyanusların ortalama derinliği yaklaşık 3.682 metredir.",
        text: "NOAA'nın verdiği küresel ortalama okyanus derinliği yaklaşık 3,7 kilometredir.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceandepth.html"
    },

    {
        icon: "🌊",
        title: "Bilinen en derin okyanus noktası Challenger Deep'tir.",
        text: "Mariana Çukuru'nun güney bölümündeki Challenger Deep yaklaşık 10.935 metre derinliğe ulaşır.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceandepth.html"
    },

    {
        icon: "🚢",
        title: "Challenger Deep'in adı 1800'lerdeki bir araştırma gemisinden gelir.",
        text: "Bölgenin adı, mürettebatı 1875'te çukurun derinliğini ölçen HMS Challenger gemisinden gelir.",
        tag: "DÜNYA",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/oceandepth.html"
    },

    {
        icon: "🪸",
        title: "Beyin mercanlarının aslında beyni yoktur.",
        text: "Beyne benzeyen kıvrımlı görüntülerine rağmen brain coral adı verilen mercanların gerçek bir beyni bulunmaz.",
        tag: "OKYANUS",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/brain-coral.html"
    },

    {
        icon: "🪸",
        title: "Bazı beyin mercanları 900 yıla kadar yaşayabilir.",
        text: "NOAA'ya göre bazı beyin mercanı türleri yaklaşık 900 yıl yaşayabilir.",
        tag: "OKYANUS",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/brain-coral.html"
    },

    {
        icon: "🪸",
        title: "Beyin mercanları yaklaşık 1,8 metre yüksekliğe ulaşabilir.",
        text: "Yavaş büyüyen bazı beyin mercanları altı feet, yani yaklaşık 1,8 metre yüksekliğe ulaşabilir.",
        tag: "OKYANUS",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/brain-coral.html"
    },

    {
        icon: "🌊",
        title: "Mercan resifleri dalga enerjisinin %97'sine kadarını azaltabilir.",
        text: "Mercan resifleri fırtınalarda kıyıya ulaşan dalga enerjisinin çok büyük bölümünü emerek kıyıları koruyabilir.",
        tag: "OKYANUS",
        sourceName: "NOAA",
        source: "https://oceanservice.noaa.gov/facts/brain-coral.html"
    },

    // =====================================================
    // DEPREM & JEOLOJİ
    // =====================================================

    {
        icon: "💥",
        title: "Deprem, bir fay üzerindeki ani kaymayla oluşabilir.",
        text: "Kayalarda biriken gerilim aniden boşaldığında enerji dalgalar halinde yayılır ve yer sarsıntısı meydana gelir.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/programs/earthquake-hazards/earthquake-facts-earthquake-fantasy"
    },

    {
        icon: "🌍",
        title: "Tektonik plakalar sürekli ve yavaş biçimde hareket eder.",
        text: "Dünya'nın dış bölümünü oluşturan tektonik plakalar birbirlerine göre sürekli hareket halindedir.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/programs/earthquake-hazards/earthquake-facts-earthquake-fantasy"
    },

    {
        icon: "📏",
        title: "San Andreas Fayı'ndaki göreli hareket yılda yaklaşık 5 cm'dir.",
        text: "Pasifik Plakası, San Andreas Fayı boyunca Kuzey Amerika Plakası'na göre yılda yaklaşık iki inç hareket eder.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/programs/earthquake-hazards/earthquake-facts-earthquake-fantasy"
    },

    {
        icon: "🔥",
        title: "En büyük depremlerin yaklaşık %81'i Pasifik çevresindeki kuşakta meydana gelir.",
        text: "Circum-Pacific seismic belt olarak bilinen bölge, Dünya'nın en büyük deprem kuşağıdır ve Ateş Çemberi adıyla da bilinir.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/faqs/where-do-earthquakes-occur"
    },

    {
        icon: "💥",
        title: "1960 Şili depremi 9,5 büyüklüğündeydi.",
        text: "USGS kayıtlarında 1960 Şili depremi, Circum-Pacific kuşağındaki M9.5 büyüklüğündeki dev depremlerden biri olarak yer alır.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/faqs/where-do-earthquakes-occur"
    },

    {
        icon: "🌍",
        title: "Büyük depremlerin yaklaşık %17'si Alpide kuşağında meydana gelir.",
        text: "Java ve Sumatra'dan Himalayalar ve Akdeniz üzerinden Atlantik'e uzanan Alpide kuşağı önemli bir deprem bölgesidir.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/programs/earthquake-hazards/earthquake-facts-earthquake-fantasy"
    },

    {
        icon: "🌎",
        title: "Depremler yalnızca levha sınırlarında gerçekleşmez.",
        text: "Depremler Dünya'nın farklı bölgelerinde meydana gelebilir; ancak büyük çoğunluğu belirli sismik kuşaklarda yoğunlaşır.",
        tag: "DÜNYA",
        sourceName: "USGS",
        source: "https://www.usgs.gov/faqs/where-do-earthquakes-occur"
    },

    // =====================================================
    // DNA & İNSAN GENOMU
    // =====================================================

    {
        icon: "🧬",
        title: "Tek bir insan hücresindeki DNA açılırsa yaklaşık 1,8 metreyi bulabilir.",
        text: "NHGRI, tek bir insan hücresindeki kromozomların DNA'sının tamamen açıldığında yaklaşık altı feet uzunluğa ulaşacağını belirtiyor.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🧬",
        title: "İnsan genomunun bir kopyasında yaklaşık 3 milyar nükleotid vardır.",
        text: "Bu dev genetik bilgi 23 kromozoma dağıtılmış durumdadır.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genomic-variation"
    },

    {
        icon: "🧬",
        title: "İnsanlarda yaklaşık 20.000 protein kodlayan gen vardır.",
        text: "İnsan genomunun büyüklüğüne rağmen protein yapımı için bilgi taşıyan genlerin sayısı yaklaşık 20 bindir.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Gene"
    },

    {
        icon: "🤯",
        title: "Protein kodlayan bilgiler genomun yalnızca yaklaşık %1,5'ini kaplar.",
        text: "NHGRI'ye göre yaklaşık 20 bin protein kodlayan genin bilgisi insan genomunun yalnızca yaklaşık %1,5'inde bulunur.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Gene"
    },

    {
        icon: "🧬",
        title: "İnsan hücrelerinin çoğunda 46 kromozom bulunur.",
        text: "Tipik bir insan hücresinde kromozomlar 23 çift halinde bulunur ve toplam sayı 46'dır.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosome-Abnormalities-Fact-Sheet"
    },

    {
        icon: "👨‍👩‍👦",
        title: "23 kromozom anneden, 23 kromozom babadan gelir.",
        text: "Tipik insan genomunda bir 23 kromozomluk takım yumurtadan, diğer takım spermden gelir.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosome-Abnormalities-Fact-Sheet"
    },

    {
        icon: "🧬",
        title: "İlk 22 kromozom çifti otozom olarak adlandırılır.",
        text: "İnsanlarda 22 çift numaralandırılmış otozom ve bir çift cinsiyet kromozomu bulunur.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Autosome"
    },

    {
        icon: "🧬",
        title: "Her kromozom tek bir uzun DNA molekülü içerir.",
        text: "Bir kromozom proteinler ve tek bir uzun DNA molekülünden oluşan paketlenmiş bir yapıdır.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🧵",
        title: "DNA, histon adı verilen proteinlerin çevresine sarılır.",
        text: "DNA'nın hücre içine sığabilmesi için uzun DNA molekülleri histon proteinleri çevresinde sıkı biçimde paketlenir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🎨",
        title: "'Kromozom' kelimesi renk ve vücut anlamındaki Yunanca sözcüklerden gelir.",
        text: "Araştırmalarda kullanılan bazı boyalarla güçlü şekilde boyandıkları için bu yapılara kromozom adı verilmiştir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🪰",
        title: "Meyve sineklerinin yalnızca dört çift kromozomu vardır.",
        text: "Kromozom sayısı türler arasında büyük farklılıklar gösterir; meyve sineğinde dört çift bulunur.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🌾",
        title: "Pirinç bitkisinin 12 çift kromozomu vardır.",
        text: "Kromozom sayısı bir canlının ne kadar karmaşık olduğunun doğrudan ölçüsü değildir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🐕",
        title: "Köpeklerin 39 çift kromozomu vardır.",
        text: "İnsanlarda 23 çift kromozom bulunurken köpeklerde kromozom sayısı 39 çifttir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🧬",
        title: "DNA dört farklı bazdan oluşan bir alfabe kullanır.",
        text: "DNA'nın dört bazı adenin, timin, sitozin ve guanindir; bunlar A, T, C ve G harfleriyle gösterilir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/A-Brief-Guide-to-Genomics"
    },

    {
        icon: "🧬",
        title: "DNA'da A, T ile eşleşir.",
        text: "Çift sarmal DNA'nın karşılıklı ipliklerinde adenin normal olarak timin ile baz çifti oluşturur.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Base-Pair"
    },

    {
        icon: "🧬",
        title: "DNA'da C, G ile eşleşir.",
        text: "Sitozin ile guanin DNA çift sarmalındaki diğer tamamlayıcı baz çiftini oluşturur.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Base-Pair"
    },

    {
        icon: "🌸",
        title: "Bazı bitkilerin genomu insan genomundan çok daha büyüktür.",
        text: "Paris japonica adlı bitkinin genomu yaklaşık 150 milyar nükleotid büyüklüğündedir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Genome"
    },

    {
        icon: "🌸",
        title: "Paris japonica'nın genomu insan genomunun yaklaşık 50 katıdır.",
        text: "Genom büyüklüğü canlıların biyolojik karmaşıklığıyla basit bir şekilde doğru orantılı değildir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Genome"
    },

    {
        icon: "🌲",
        title: "Loblolly çamının genomu insan genomundan yedi kattan fazla büyüktür.",
        text: "NHGRI'ye göre loblolly pine genomu yaklaşık 23 milyar baz içerirken insan genomunun bir kopyası yaklaşık 3 milyar bazdır.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost"
    },

    {
        icon: "🦠",
        title: "E. coli genomu yaklaşık 5 milyon bazdır.",
        text: "İnsan genomunun yaklaşık 3 milyar bazlık büyüklüğüyle karşılaştırıldığında E. coli bakterisinin genomu çok daha küçüktür.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost"
    },

    {
        icon: "🪰",
        title: "Meyve sineğinin genomu yaklaşık 123 milyon bazdır.",
        text: "Genomların büyüklüğü canlı türleri arasında çok büyük farklılıklar gösterebilir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost"
    },

    {
        icon: "🧬",
        title: "Mitokondrilerin de kendi DNA'sı vardır.",
        text: "İnsan genomu çekirdekteki kromozomların yanında mitokondrilerde bulunan küçük bir kromozomu da içerir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Genome"
    },

    {
        icon: "🧬",
        title: "Telomerler hücre bölündükçe DNA kaybedebilir.",
        text: "Birçok hücre türünde kromozom uçlarındaki telomerlerin DNA'sının bir bölümü her hücre bölünmesinde kaybolur.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    {
        icon: "🧬",
        title: "Bazı hücreler telomerlerini koruyabilen özel bir enzime sahiptir.",
        text: "Sık bölünebilen bazı hücrelerde telomer kaybını engellemeye yardımcı olan özel bir enzim bulunur.",
        tag: "İNSAN",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet"
    },

    // =====================================================
    // FİZİK & ZAMAN
    // =====================================================

    {
        icon: "💡",
        title: "Işığın boşluktaki hızı tam olarak 299.792.458 m/s olarak tanımlanmıştır.",
        text: "Metrenin modern SI tanımı, ışığın boşluktaki sabit hızına dayanır.",
        tag: "FİZİK",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/definitions-si-base-units"
    },

    {
        icon: "⏱️",
        title: "Bir saniyenin tanımı sezyum-133 atomuna dayanır.",
        text: "Modern SI saniyesi sezyum-133 atomunun belirli enerji düzeyleri arasındaki geçiş frekansı kullanılarak tanımlanır.",
        tag: "FİZİK",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/second-introduction"
    },

    {
        icon: "⚛️",
        title: "Bir saniye 9.192.631.770 atomik salınımla ilişkilidir.",
        text: "SI saniyesinin tanımında sezyum-133 atomunun belirli geçişine karşılık gelen 9.192.631.770 mikrodalga çevrimi kullanılır.",
        tag: "FİZİK",
        sourceName: "NIST",
        source: "https://www.nist.gov/atomic-clocks/how-do-atomic-clocks-work"
    },

    {
        icon: "⏰",
        title: "Atom saatlerindeki atomlar aslında zamanı 'bilmez'.",
        text: "Atom saatleri, atomların son derece kararlı rezonans frekanslarını referans alarak zamanı ölçer.",
        tag: "BİLİM",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/second/second-past"
    },

    {
        icon: "⏰",
        title: "NIST-7 teorik olarak 6 milyon yılda yaklaşık bir saniye sapacak doğruluktaydı.",
        text: "1993'te kullanıma giren NIST-7 atom saatinin doğruluğu, sürekli çalışması varsayımında milyonlarca yılda yaklaşık bir saniyelik sapma ölçeğindeydi.",
        tag: "TEKNOLOJİ",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/second/second-past"
    },

    {
        icon: "🛰️",
        title: "GPS'in çalışabilmesi için atom saatleri kritik öneme sahiptir.",
        text: "GPS uydularındaki hassas atom saatleri konum hesaplamalarında kullanılan zaman bilgisini sağlar.",
        tag: "TEKNOLOJİ",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/second/second-past"
    },

    {
        icon: "❄️",
        title: "Atom saatlerinde atomlar lazerlerle aşırı yavaşlatılabilir.",
        text: "Modern sezyum çeşme saatlerinde lazer soğutma, atomların hızını saniyede yüzlerce metreden birkaç santimetreye kadar düşürebilir.",
        tag: "FİZİK",
        sourceName: "NIST",
        source: "https://www.nist.gov/pml/time-and-frequency-division/time-realization/cesium-fountain-atomic-clocks"
    },

    {
        icon: "🌡️",
        title: "Lazerle soğutulan atomlar mutlak sıfırın birkaç milyonda bir derece üzerine indirilebilir.",
        text: "Sezyum çeşme atom saatlerinde atomların sıcaklığı mutlak sıfırın yalnızca birkaç milyonda bir derece üzerine kadar düşürülebilir.",
        tag: "FİZİK",
        sourceName: "NIST",
        source: "https://www.nist.gov/pml/time-and-frequency-division/time-realization/cesium-fountain-atomic-clocks"
    },

    // =====================================================
    // TARİH & TEKNOLOJİ
    // =====================================================

    {
        icon: "☎️",
        title: "Alexander Graham Bell telefon patentiyle 1876'da tarihe geçti.",
        text: "Bell'e 7 Mart 1876 tarihinde telefon teknolojisiyle ilgili ABD Patent No. 174,465 verildi.",
        tag: "TARİH",
        sourceName: "Library of Congress",
        source: "https://www.loc.gov/everyday-mysteries/categories/technology/item/who-is-credited-with-inventing-the-telephone"
    },

    {
        icon: "☎️",
        title: "Bell'in ünlü ilk telefon görüşmesi patentten yalnızca üç gün sonra gerçekleşti.",
        text: "10 Mart 1876'da Alexander Graham Bell, yardımcısı Thomas Watson'a çalışan telefonu üzerinden seslendi.",
        tag: "TARİH",
        sourceName: "Library of Congress",
        source: "https://guides.loc.gov/chronicling-america-telephone-invention"
    },

    {
        icon: "📡",
        title: "İlk tarihi Morse telgraf mesajı 1844'te gönderildi.",
        text: "Samuel Morse 24 Mayıs 1844'te Washington ile Baltimore arasında elektrik sinyalleri kullanarak tarihi telgraf mesajını gönderdi.",
        tag: "TARİH",
        sourceName: "Library of Congress",
        source: "https://www.loc.gov/classroom-materials/inventions-and-innovations/"
    },

    {
        icon: "•••",
        title: "Morse kodu verimlilik düşünülerek tasarlandı.",
        text: "Sık kullanılan harflere daha kısa nokta ve çizgi dizileri verilerek mesajların daha verimli iletilmesi amaçlandı.",
        tag: "TEKNOLOJİ",
        sourceName: "Library of Congress",
        source: "https://www.loc.gov/classroom-materials/inventions-and-innovations/"
    },

    // =====================================================
    // EKSTRA — SAYIYI 100'E TAMAMLAYAN DOĞRULANMIŞ BİLGİLER
    // =====================================================

    {
        icon: "🟠",
        title: "Jüpiter Dünya'dan yaklaşık 11 kat daha geniştir.",
        text: "Jüpiter'in yarıçapı yaklaşık 69.911 kilometredir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "☀️",
        title: "Güneş ışığının Jüpiter'e ulaşması yaklaşık 43 dakika sürer.",
        text: "Jüpiter'in Güneş'e ortalama uzaklığı yaklaşık 778 milyon kilometredir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "📅",
        title: "Jüpiter'de bir yıl yaklaşık 12 Dünya yılıdır.",
        text: "Jüpiter Güneş çevresindeki yörüngesini yaklaşık 4.333 Dünya gününde tamamlar.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/jupiter/jupiter-facts/"
    },

    {
        icon: "🪐",
        title: "Satürn Güneş'ten yaklaşık 1,4 milyar kilometre uzaktadır.",
        text: "Satürn'ün Güneş'e ortalama uzaklığı yaklaşık 9,5 astronomik birimdir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "☀️",
        title: "Güneş ışığının Satürn'e ulaşması yaklaşık 80 dakika sürer.",
        text: "Işık son derece hızlı olmasına rağmen Satürn'ün uzaklığı nedeniyle yolculuk yaklaşık 80 dakika sürer.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/saturn/facts/"
    },

    {
        icon: "🔵",
        title: "Uranüs Dünya'dan yaklaşık dört kat daha geniştir.",
        text: "Uranüs'ün ekvator çapı yaklaşık 51.118 kilometredir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "☀️",
        title: "Güneş ışığının Uranüs'e ulaşması yaklaşık 2 saat 40 dakika sürer.",
        text: "Uranüs Güneş'ten ortalama yaklaşık 2,9 milyar kilometre uzaktadır.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/uranus/facts/"
    },

    {
        icon: "🔵",
        title: "Neptün Dünya'dan yaklaşık dört kat daha geniştir.",
        text: "Neptün'ün ekvator çapı yaklaşık 49.528 kilometredir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "💍",
        title: "Neptün'ün en az beş ana halkası vardır.",
        text: "Neptün çevresinde beş ana halka ve belirgin halka yayları bulunduğu biliniyor.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "🌕",
        title: "Neptün'ün 16 bilinen uydusu vardır.",
        text: "Bu uyduların en büyüğü Triton'dur ve Neptün keşfedildikten yalnızca 17 gün sonra keşfedilmiştir.",
        tag: "UZAY",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/moons/facts/"
    },

    {
        icon: "🔭",
        title: "Galileo Neptün'ü görmüş ama gezegen olduğunu anlamamıştı.",
        text: "Galileo 1612 ve 1613'te Neptün'ü gözlem kayıtlarına sabit bir yıldız olarak geçirdi.",
        tag: "TARİH",
        sourceName: "NASA",
        source: "https://science.nasa.gov/neptune/neptune-facts/"
    },

    {
        icon: "🧬",
        title: "Bir insanın diploid genomunda yaklaşık 6 milyar baz bulunur.",
        text: "İnsan hücrelerinin çoğu genomun iki kopyasını taşıdığı için toplam genomik DNA yaklaşık 6 milyar baz ölçeğindedir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost"
    },

    {
        icon: "🧬",
        title: "Genom, bir hücredeki tüm DNA talimatlarının tamamıdır.",
        text: "Genom terimi bir organizmanın hücresinde bulunan tüm DNA bilgisini ifade eder.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Genome"
    },

    {
        icon: "🧬",
        title: "DNA çift sarmal biçiminde iki bağlı iplikten oluşur.",
        text: "DNA'nın iki ipliği birbirinin çevresinde kıvrılarak ünlü çift sarmal yapısını meydana getirir.",
        tag: "GENETİK",
        sourceName: "NHGRI",
        source: "https://www.genome.gov/genetics-glossary/Base-Pair"
    },

    {
        icon: "⏱️",
        title: "1967'den beri saniyenin tanımı astronomik hareketlere değil atomlara dayanıyor.",
        text: "Uluslararası SI saniyesi 1967'de sezyum-133 atomunun kuantum geçişine dayalı biçimde yeniden tanımlandı.",
        tag: "BİLİM",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/second/second-past"
    },

    {
        icon: "🌐",
        title: "Hassas atom saatleri internet sistemlerinin senkronizasyonunda kullanılabilir.",
        text: "Modern hassas zaman standartları internet sunucuları ve yüksek hızlı iletişim gibi sistemlerin zaman senkronizasyonunda rol oynar.",
        tag: "TEKNOLOJİ",
        sourceName: "NIST",
        source: "https://www.nist.gov/si-redefinition/second/second-present"
    }

];

let currentFactIndex = -1;


function getRandomFact() {

    let newIndex;

    do {

        newIndex = Math.floor(
            Math.random() * amazingFacts.length
        );

    } while (
        newIndex === currentFactIndex &&
        amazingFacts.length > 1
    );

    currentFactIndex = newIndex;

    return amazingFacts[newIndex];
}


function createFactExperience() {

    const fact = getRandomFact();

    return `
        <div class="fact-experience">

            <div class="fact-top">
                <span class="fact-experiment">DENEY 01</span>
                <span class="fact-count">
                    ${currentFactIndex + 1} / ${amazingFacts.length}
                </span>
            </div>

            <div class="fact-icon">
                ${fact.icon}
            </div>

            <span class="fact-tag">
                ${fact.tag}
            </span>

            <h2 class="fact-title">
                ${fact.title}
            </h2>

            <p class="fact-text">
                ${fact.text}
            </p>

            <div class="fact-line"></div>

            <button
                class="next-fact-button"
                onclick="showAnotherFact()"
            >
                BİR TANE DAHA
                <span>→</span>
            </button>

            <p class="fact-bottom">
            <div class="fact-source-area">
    <span class="fact-verified">✓ DOĞRULANMIŞ BİLGİ</span>

    <a
        href="${fact.source}"
        target="_blank"
        rel="noopener noreferrer"
        class="fact-source-button"
    >
        KAYNAĞI GÖR
        <span>${fact.sourceName} ↗</span>
    </a>
</div>
            </p>

        </div>
    `;
}


function showAnotherFact() {

    experienceContent.animate(
        [
            {
                opacity: 1,
                transform: "translateY(0)"
            },

            {
                opacity: 0,
                transform: "translateY(-15px)"
            }
        ],
        {
            duration: 180,
            fill: "forwards"
        }
    );

    setTimeout(() => {

        experienceContent.innerHTML =
            createFactExperience();

        experienceContent.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(15px)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 300,
                fill: "forwards"
            }
        );

    }, 180);

}


/* =========================================
   KEŞİF SİSTEMİ
========================================= */

let discovered = JSON.parse(
    localStorage.getItem("discoveredCategories")
) || [];


function updateDiscoveryCounter() {

    discoveryCounter.textContent =
        `${discovered.length} / 12 keşfedildi`;

}


function discoverCategory(category) {

    if (!discovered.includes(category)) {

        discovered.push(category);

        localStorage.setItem(
            "discoveredCategories",
            JSON.stringify(discovered)
        );

        updateDiscoveryCounter();

        showSecretMessage(
            `${categories[category].number}. bölüm keşfedildi`
        );

    }

}


/* =========================================
   BİLDİRİM
========================================= */

let messageTimeout;


function showSecretMessage(message) {

    clearTimeout(messageTimeout);

    secretMessage.textContent = message;

    secretMessage.classList.add("show");

    messageTimeout = setTimeout(() => {

        secretMessage.classList.remove("show");

    }, 2500);

}


/* =========================================
   STANDART BÖLÜM EKRANI
========================================= */

function createComingSoon(category) {

    const data = categories[category];

    return `
        <div style="
            animation: contentAppear .5s ease;
            padding: 30px 10px;
        ">

            <div style="
                font-size: 65px;
                margin-bottom: 25px;
            ">
                ${data.emoji}
            </div>

            <div style="
                color:#8b5cf6;
                font-size:11px;
                letter-spacing:4px;
                font-weight:800;
                margin-bottom:15px;
            ">
                DENEY ${data.number}
            </div>

            <h2 style="
                font-size:clamp(36px,6vw,65px);
                letter-spacing:-3px;
                margin-bottom:20px;
            ">
                ${data.title}
            </h2>

            <p style="
                color:#858591;
                max-width:550px;
                margin:0 auto;
                line-height:1.7;
                font-size:15px;
            ">
                ${data.subtitle}
            </p>

            <div style="
                width:40px;
                height:1px;
                background:#8b5cf6;
                margin:35px auto;
            "></div>

            <p style="
                color:#555560;
                font-size:12px;
            ">
                Bu deney birazdan burada yaşayacak.
            </p>

        </div>
    `;

}


/* =========================================
   BÖLÜM AÇ
========================================= */

function openExperience(category) {

    if (!categories[category]) {
        return;
    }

    discoverCategory(category);

   if (category === "facts") {

    experienceContent.innerHTML =
        createFactExperience();

} else if (category === "random") {

    experienceContent.innerHTML =
        createRandomExperience();

} else if (category === "brain") {
    
    experienceContent.innerHTML =
        createBrainExperience();

} else if (category === "illusion") {

    experienceContent.innerHTML =
        createIllusionExperience();

} else if (category === "predict") {

    experienceContent.innerHTML =
        createPredictExperience();

} else {

    experienceContent.innerHTML =
        createComingSoon(category);

}

    // PENCEREYİ AÇ
    overlay.classList.add("active");

    // ARKA PLANIN KAYMASINI ENGELLE
    document.body.style.overflow = "hidden";
}


/* =========================================
   BÖLÜM KAPAT
========================================= */

function closeExperience() {

    overlay.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   KARTLAR
========================================= */

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.dataset.category;

        openExperience(category);

    });

});


/* =========================================
   KAPATMA BUTONU
========================================= */

closeButton.addEventListener(
    "click",
    closeExperience
);


/* ESC İLE KAPAT
========================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        overlay.classList.contains("active")
    ) {

        closeExperience();

    }

});


/* =========================================
   RASTGELE BÖLÜM
========================================= */

function openRandomExperience() {

    const categoryNames =
        Object.keys(categories);

    const randomIndex =
        Math.floor(
            Math.random() * categoryNames.length
        );

    const randomCategory =
        categoryNames[randomIndex];

    openExperience(randomCategory);

}


randomButton.addEventListener(
    "click",
    openRandomExperience
);


/* =========================================
   ANA "BENİ ŞAŞIRT" BUTONU
========================================= */

enterButton.addEventListener("click", () => {

    const mainContent =
        document.getElementById("mainContent");

    mainContent.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   GİZLİ KLAVYE OLAYI
========================================= */

let secretKeys = "";

document.addEventListener("keydown", event => {

    if (event.key.length !== 1) {
        return;
    }

    secretKeys +=
        event.key.toLowerCase();

    if (secretKeys.length > 20) {

        secretKeys =
            secretKeys.slice(-20);

    }

    if (secretKeys.includes("bilmedigin")) {

        showSecretMessage(
            "Burayı bulacağını düşünmemiştik."
        );

        document.body.animate(
            [
                {
                    filter: "brightness(1)"
                },

                {
                    filter: "brightness(1.5)"
                },

                {
                    filter: "brightness(1)"
                }
            ],
            {
                duration: 700
            }
        );

        secretKeys = "";

    }

});


/* =========================================
   LOGOYA GİZLİ TIKLAMA
========================================= */

const logo =
    document.querySelector(".logo");

let logoClicks = 0;

let logoTimer;


logo.addEventListener("click", () => {

    logoClicks++;

    clearTimeout(logoTimer);

    if (logoClicks === 3) {

        showSecretMessage(
            "Evet, logo tıklanabiliyor."
        );

    }

    if (logoClicks === 7) {

        showSecretMessage(
            "Tamam. Yeterince meraklısın."
        );

        logo.animate(
            [
                {
                    transform: "rotate(0deg)"
                },

                {
                    transform: "rotate(360deg)"
                }
            ],
            {
                duration: 800,
                easing: "ease"
            }
        );

        logoClicks = 0;

    }

    logoTimer = setTimeout(() => {

        logoClicks = 0;

    }, 3000);

});


/* =========================================
   SAYFA AÇILDIĞINDA
========================================= */

updateDiscoveryCounter();


/* =========================================
   DENEY 02
   RASTGELE DENEY MOTORU
========================================= */

const randomExperiences = [

    {
        id: "numberGuess",
        icon: "🎯",
        type: "TAHMİN",
        title: "Aklından bir sayı tut.",
        text: "1 ile 10 arasında bir sayı seç. Bana söyleme."
    },

    {
        id: "coinFlip",
        icon: "🪙",
        type: "ŞANS",
        title: "Yazı mı, tura mı?",
        text: "Tarafını seç. Sonra şansına güven."
    },

    {
    id: "tenSecondChallenge",
    icon: "⏱️",
    type: "MEYDAN OKUMA",
    title: "10 saniye dayanabilir misin?",
    text: "10 saniye boyunca gözlerini kırpmamaya çalış. Hazır olduğunda başlat."
},

{
    id: "animalRush",
    icon: "🐾",
    type: "HIZ TESTİ",
    title: "5 hayvan yazabilir misin?",
    text: "Sadece 10 saniyen var. Aynı hayvanı iki kere yazmak yok."
},
{
    id: "colorTrap",
    icon: "🎨",
    type: "RENK TESTİ",
    title: "Gözlerin beynine karşı.",
    text: "Kelimeyi okuma. MAVİ RENKTE yazılmış 3 kelimeyi mümkün olduğunca hızlı bul."
},

{
    id: "timeChoice",
    icon: "⏳",
    type: "KARAR",
    title: "Geçmiş mi, gelecek mi?",
    text: "Sadece birine gidebilirsin. Geri dönüş yok."
}


];

let currentRandomExperience = null;
let randomExperienceQueue = [];
let lastRandomExperienceId = null;
let coinWins = 0;
let coinLosses = 0;

/* =========================================
   RASTGELE DENEY SEÇ
========================================= */

function getRandomExperience() {

    /* Kuyruk bittiyse yeni tur oluştur */
    if (randomExperienceQueue.length === 0) {

        randomExperienceQueue = [
            ...randomExperiences
        ];


        /* Fisher-Yates ile karıştır */
        for (
            let i = randomExperienceQueue.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                randomExperienceQueue[i],
                randomExperienceQueue[j]
            ] = [
                randomExperienceQueue[j],
                randomExperienceQueue[i]
            ];
        }


        /*
           Yeni turun ilk eventi,
           önceki turun son eventiyle
           aynı olmasın.
        */

        if (
            randomExperienceQueue.length > 1 &&
            randomExperienceQueue[0].id ===
                lastRandomExperienceId
        ) {

            [
                randomExperienceQueue[0],
                randomExperienceQueue[1]
            ] = [
                randomExperienceQueue[1],
                randomExperienceQueue[0]
            ];
        }
    }


    /* Sıradaki eventi al */
    currentRandomExperience =
        randomExperienceQueue.shift();


    /* Son gösterileni hatırla */
    lastRandomExperienceId =
        currentRandomExperience.id;


    return currentRandomExperience;
}

/* =========================================
   DENEYİ OLUŞTUR
========================================= */

function createRandomExperience() {

    const item = getRandomExperience();

    return `
        <div class="random-experience">

            <div class="random-top">

                <span class="random-experiment">
                    DENEY 02
                </span>

                <span class="random-warning">
                    NE ÇIKACAĞI BELLİ DEĞİL
                </span>

            </div>

            <div class="random-icon">
                ${item.icon}
            </div>

            <div class="random-type">
                ${item.type}
            </div>

            <h2 class="random-title">
                ${item.title}
            </h2>

            <p class="random-text">
                ${item.text}
            </p>

            <div
                id="randomGameArea"
                class="random-game-area"
            >

                ${createRandomGame(item)}

            </div>

            <button
                class="random-skip-button"
                onclick="showAnotherRandomExperience()"
            >
                BAŞKA BİR ŞEY GÖSTER
            </button>

        </div>
    `;
}


/* =========================================
   DENEYİN İÇERİĞİ
========================================= */

function createRandomGame(item) {

    if (item.id === "numberGuess") {

        return `
            <div class="random-line"></div>

            <button
                class="random-action-button"
                onclick="startNumberGuess()"
            >
                SAYIYI TUTTUM
                <span>→</span>
            </button>
        `;
    }


    if (item.id === "coinFlip") {

        return `
            <div class="random-line"></div>

            <p class="random-result-question">
                Tarafını seç:
            </p>

            <div class="coin-choice-buttons">

                <button
                    class="coin-choice"
                    onclick="selectCoinSide('YAZI')"
                >
                    <span>🪙</span>
                    YAZI
                </button>

                <button
                    class="coin-choice"
                    onclick="selectCoinSide('TURA')"
                >
                    <span>👑</span>
                    TURA
                </button>

            </div>

            <div class="coin-score">
                <span>
                    GALİBİYET
                    <strong id="coinWins">
                        ${coinWins}
                    </strong>
                </span>

                <span>
                    MAĞLUBİYET
                    <strong id="coinLosses">
                        ${coinLosses}
                    </strong>
                </span>
            </div>
        `;
    }
if (item.id === "tenSecondChallenge") {

    return `
        <div class="random-line"></div>

        <button
            class="random-action-button"
            onclick="startTenSecondChallenge()"
        >
            HAZIRIM
            <span>→</span>
        </button>
    `;
}

if (item.id === "tenSecondChallenge") {

    return `
        <div class="random-line"></div>

        <button
            class="random-action-button"
            onclick="startTenSecondChallenge()"
        >
            HAZIRIM
            <span>→</span>
        </button>
    `;
}

if (item.id === "animalRush") {

    return `
        <div class="random-line"></div>

        <button
            class="random-action-button"
            onclick="startAnimalRush()"
        >
            10 SANİYEYİ BAŞLAT
            <span>→</span>
        </button>
    `;
}
if (item.id === "colorTrap") {

    return `
        <div class="random-line"></div>

        <button
            class="random-action-button"
            onclick="startColorTrap()"
        >
            TESTİ BAŞLAT
            <span>→</span>
        </button>
    `;
}

if (item.id === "timeChoice") {

    return `
        <div class="random-line"></div>

        <div class="time-choice-intro">
            <p>
                Bir seçim yapman gerekiyor.
            </p>

            <span>
                Kararını verdikten sonra sana bir soru daha soracağım.
            </span>
        </div>

        <div class="time-choice-buttons">

            <button
                class="time-choice-button time-choice-past"
                onclick="selectTimeChoice('past')"
            >
                <span class="time-choice-icon">←</span>

                <div>
           <strong>GEÇMİŞE GİT</strong>
                </div>
            </button>


            <button
                class="time-choice-button time-choice-future"
                onclick="selectTimeChoice('future')"
            >
                <div>
                    <strong>GELECEĞE GİT</strong>
                </div>

                <span class="time-choice-icon">→</span>
            </button>

        </div>
    `;
}

    return "";
}

/* =========================================
   01 — SAYI TAHMİNİ
========================================= */

function startNumberGuess() {

    const gameArea =
        document.getElementById("randomGameArea");

    const guessedNumber =
        Math.floor(Math.random() * 10) + 1;

    gameArea.innerHTML = `
        <div class="guess-thinking">
            Hmm...
        </div>
    `;

    setTimeout(() => {

        gameArea.innerHTML = `

            <p class="random-result-label">
                BENCE TUTTUĞUN SAYI
            </p>

            <div class="random-big-number">
                ${guessedNumber}
            </div>

            <p class="random-result-question">
                Bildim mi?
            </p>

            <div class="random-choice-buttons">

                <button
                    class="random-action-button"
                    onclick="numberGuessCorrect()"
                >
                    BİLDİN
                </button>

                <button
                    class="random-secondary-button"
                    onclick="numberGuessWrong(${guessedNumber})"
                >
                    BİLEMEDİN
                </button>

            </div>
        `;

    }, 900);
}


/* =========================================
   SAYIYI BİLDİ
========================================= */

function numberGuessCorrect() {

    const gameArea =
        document.getElementById("randomGameArea");

    gameArea.innerHTML = `

        <div class="random-final-result">

            <div class="random-result-emoji">
                😎
            </div>

            <h3>
                BİLİYORDUM.
            </h3>

            <p>
                Tamamen bilimsel yöntemler kullandım.
                Kesinlikle %10 ihtimal değildi.
            </p>

        </div>
    `;
}


/* =========================================
   SAYIYI BİLEMEDİ
========================================= */

function numberGuessWrong(guessedNumber) {

    const gameArea =
        document.getElementById("randomGameArea");

    let buttons = "";

    for (let i = 1; i <= 10; i++) {

        buttons += `
            <button
                class="number-option"
                onclick="
                    revealNumberGuess(
                        ${i},
                        ${guessedNumber}
                    )
                "
            >
                ${i}
            </button>
        `;
    }

    gameArea.innerHTML = `

        <p class="random-result-question">
            Peki hangi sayıyı tutmuştun?
        </p>

        <div class="number-options">
            ${buttons}
        </div>
    `;
}


/* =========================================
   GERÇEK SAYIYI GÖSTER
========================================= */

function revealNumberGuess(
    actualNumber,
    guessedNumber
) {

    const gameArea =
        document.getElementById("randomGameArea");

    const difference =
        Math.abs(
            actualNumber - guessedNumber
        );

    let message;

    if (difference === 1) {

        message =
            "Bir sayı farkla kaçırdım. Bunu yarım puan sayıyorum.";

    } else if (difference <= 3) {

        message =
            "Yakındım. En azından tamamen rezil olmadım.";

    } else {

        message =
            "Bunu hiç konuşmamışız gibi davranalım.";
    }

    gameArea.innerHTML = `

        <div class="random-final-result">

            <div class="random-result-emoji">
                🤨
            </div>

           <h3>
    TUTTUĞUN SAYI: ${actualNumber}
</h3>

            <p>
                Ben ${guessedNumber} demiştim.
                ${message}
            </p>

        </div>
    `;
}


/* =========================================
   BAŞKA DENEY
========================================= */

function showAnotherRandomExperience() {

    const experience =
        document.querySelector(
            ".random-experience"
        );

    if (!experience) {
        return;
    }

    experience.style.opacity = "0";

    experience.style.transform =
        "translateY(10px) scale(0.98)";

    setTimeout(() => {

        experienceContent.innerHTML =
            createRandomExperience();

    }, 180);
}

/* =========================================
   02 — YAZI TURA
========================================= */

function selectCoinSide(playerChoice) {

    const gameArea =
        document.getElementById("randomGameArea");

    gameArea.innerHTML = `

        <div class="coin-flip-area">

            <p class="random-result-label">
                SENİN SEÇİMİN
            </p>

            <strong class="coin-player-choice">
                ${playerChoice}
            </strong>

            <div class="coin-flipping">
                🪙
            </div>

            <p class="coin-wait-text">
                PARA ATILIYOR...
            </p>

        </div>
    `;


    setTimeout(() => {

        const result =
            Math.random() < 0.5
                ? "YAZI"
                : "TURA";

        const won =
            result === playerChoice;


        if (won) {

            coinWins++;

        } else {

            coinLosses++;

        }


        showCoinResult(
            playerChoice,
            result,
            won
        );

    }, 1600);
}


/* =========================================
   YAZI TURA SONUCU
========================================= */

function showCoinResult(
    playerChoice,
    result,
    won
) {

    const gameArea =
        document.getElementById("randomGameArea");


    const resultEmoji =
        result === "YAZI"
            ? "🪙"
            : "👑";


    const title =
        won
            ? "KAZANDIN."
            : "KAYBETTİN.";


    const message =
        won
            ? "Bugün şans senden yana."
            : "Para seninle aynı fikirde değildi.";


    gameArea.innerHTML = `

        <div class="
            coin-result
            ${won ? "coin-win" : "coin-lose"}
        ">

            <div class="coin-result-icon">
                ${resultEmoji}
            </div>

            <p class="random-result-label">
                PARA
            </p>

            <div class="coin-result-side">
                ${result}
            </div>

            <h3 class="coin-result-title">
                ${title}
            </h3>

            <p class="coin-result-message">
                Sen ${playerChoice} seçtin.
                ${message}
            </p>


            <div class="coin-score coin-score-result">

                <span>
                    GALİBİYET
                    <strong>
                        ${coinWins}
                    </strong>
                </span>

                <span>
                    MAĞLUBİYET
                    <strong>
                        ${coinLosses}
                    </strong>
                </span>

            </div>


            <button
                class="random-action-button"
                onclick="playCoinAgain()"
            >
                TEKRAR OYNA
                <span>↻</span>
            </button>

        </div>
    `;
}


/* =========================================
   TEKRAR YAZI TURA
========================================= */

function playCoinAgain() {

    const gameArea =
        document.getElementById("randomGameArea");

    gameArea.innerHTML = `

        <p class="random-result-question">
            Bu kez hangisini seçiyorsun?
        </p>

        <div class="coin-choice-buttons">

            <button
                class="coin-choice"
                onclick="selectCoinSide('YAZI')"
            >
                <span>🪙</span>
                YAZI
            </button>

            <button
                class="coin-choice"
                onclick="selectCoinSide('TURA')"
            >
                <span>👑</span>
                TURA
            </button>

        </div>

        <div class="coin-score">

            <span>
                GALİBİYET
                <strong>
                    ${coinWins}
                </strong>
            </span>

            <span>
                MAĞLUBİYET
                <strong>
                    ${coinLosses}
                </strong>
            </span>

        </div>
    `;
}

/* =========================================
   03 — 10 SANİYE MEYDAN OKUMASI
========================================= */

let challengeTimer = null;

function startTenSecondChallenge() {

    clearInterval(challengeTimer);

    const gameArea =
        document.getElementById("randomGameArea");

    let timeLeft = 10;

    gameArea.innerHTML = `

        <div class="challenge-area">

            <div class="challenge-eye">
                👁️
            </div>

            <p class="random-result-label">
                GÖZLERİNİ KIRPMA
            </p>

            <div
                id="challengeCountdown"
                class="challenge-countdown"
            >
                10
            </div>

            <p class="challenge-status">
                BAŞLADI
            </p>

        </div>
    `;


    challengeTimer = setInterval(() => {

        timeLeft--;

        const countdown =
            document.getElementById(
                "challengeCountdown"
            );

        /*
            Kullanıcı başka evente geçtiyse
            timer kendi kendini kapatır.
        */

        if (!countdown) {

            clearInterval(challengeTimer);
            challengeTimer = null;

            return;
        }


        countdown.textContent =
            timeLeft;


        countdown.classList.remove(
            "countdown-pop"
        );

        void countdown.offsetWidth;

        countdown.classList.add(
            "countdown-pop"
        );


        if (timeLeft <= 3) {

            countdown.classList.add(
                "countdown-danger"
            );
        }


        if (timeLeft <= 0) {

            clearInterval(challengeTimer);

            challengeTimer = null;

            finishTenSecondChallenge();
        }

    }, 1000);
}


/* =========================================
   SÜRE TAMAMLANDI
========================================= */

function finishTenSecondChallenge() {

    const gameArea =
        document.getElementById(
            "randomGameArea"
        );

    if (!gameArea) {
        return;
    }


    gameArea.innerHTML = `

        <div class="challenge-finished">

            <div class="challenge-finish-icon">
                ✓
            </div>

            <p class="random-result-label">
                SÜRE TAMAMLANDI
            </p>

            <h3>
                10 SANİYE.
            </h3>

            <p>
                Dürüst ol.
                Gözünü kırptın mı?
            </p>


            <div class="random-choice-buttons">

                <button
                    class="random-action-button"
                    onclick="
                        finishChallengeResult(true)
                    "
                >
                    HİÇ KIRPMADIM
                </button>


                <button
                    class="random-secondary-button"
                    onclick="
                        finishChallengeResult(false)
                    "
                >
                    KIRPTIM
                </button>

            </div>

        </div>
    `;
}


/* =========================================
   SONUÇ
========================================= */

function finishChallengeResult(success) {

    const gameArea =
        document.getElementById(
            "randomGameArea"
        );


    if (success) {

        gameArea.innerHTML = `

            <div class="random-final-result">

                <div class="random-result-emoji">
                    👁️
                </div>

                <p class="random-result-label">
                    BAŞARILI
                </p>

                <h3>
                    BAŞARDIN.
                </h3>

                <p>
                    10 saniye boyunca gözlerini
                    kırpmadan durduğunu söylüyorsun.
                    Sana güveniyoruz.
                </p>

            </div>
        `;

    } else {

        gameArea.innerHTML = `

            <div class="random-final-result">

                <div class="random-result-emoji">
                    😭
                </div>

                <p class="random-result-label">
                    BAŞARISIZ
                </p>

                <h3>
                    DAYANAMADIN.
                </h3>

                <p>
                    En azından dürüstsün.
                    İstersen bir kez daha deneyebilirsin.
                </p>

                <button
                    class="
                        random-action-button
                        challenge-retry
                    "
                    onclick="
                        startTenSecondChallenge()
                    "
                >
                    TEKRAR DENE
                    <span>↻</span>
                </button>

            </div>
        `;
    }
}




/* =========================================
   10 SANİYE BİTTİ
========================================= */

function finishTenSecondChallenge() {

    const gameArea =
        document.getElementById(
            "randomGameArea"
        );

    if (!gameArea) {
        return;
    }


    gameArea.innerHTML = `

        <div class="challenge-finished">

            <div class="challenge-finish-icon">
                ✓
            </div>

            <p class="random-result-label">
                SÜRE TAMAMLANDI
            </p>

            <h3>
                10 SANİYE.
            </h3>

            <p>
                Dürüst ol.<br>
                Gözünü kırptın mı?
            </p>


            <div class="random-choice-buttons">

                <button
                    class="random-action-button"
                    onclick="finishChallengeResult(true)"
                >
                    HİÇ KIRPMADIM
                </button>

                <button
                    class="random-secondary-button"
                    onclick="finishChallengeResult(false)"
                >
                    KIRPTIM
                </button>

            </div>

        </div>
    `;
}


/* =========================================
   CHALLENGE SONUCU
========================================= */

function finishChallengeResult(success) {

    const gameArea =
        document.getElementById(
            "randomGameArea"
        );


    if (success) {

        gameArea.innerHTML = `

            <div class="random-final-result">

                <div class="random-result-emoji">
                    👁️
                </div>

                <p class="random-result-label">
                    BAŞARILI
                </p>

                <h3>
                    BAŞARDIN.
                </h3>

                <p>
                    10 saniye boyunca gözlerini
                    kırpmadığını söylüyorsun.
                    Sana güveniyoruz.
                </p>

            </div>
        `;

    } else {

        gameArea.innerHTML = `

            <div class="random-final-result">

                <div class="random-result-emoji">
                    😭
                </div>

                <p class="random-result-label">
                    BAŞARISIZ
                </p>

                <h3>
                    DAYANAMADIN.
                </h3>

                <p>
                    En azından dürüstsün.
                    Bir kez daha deneyebilirsin.
                </p>

                <button
                    class="random-action-button challenge-retry"
                    onclick="startTenSecondChallenge()"
                >
                    TEKRAR DENE
                    <span>↻</span>
                </button>

            </div>
        `;
    }
}

/* =========================================
   04 — 5 HAYVAN YAZ
========================================= */

let animalRushTimer = null;
let animalRushTime = 10;
let animalRushAnswers = [];
let animalRushRejected = [];
const validAnimals = [
    "kedi",
    "köpek",
    "aslan",
    "kaplan",
    "leopar",
    "çita",
    "jaguar",
    "panter",
    "fil",
    "zürafa",
    "zebra",
    "gergedan",
    "su aygırı",
    "maymun",
    "goril",
    "şempanze",
    "orangutan",
    "ayı",
    "kutup ayısı",
    "panda",
    "koala",
    "kanguru",
    "kurt",
    "tilki",
    "çakal",
    "sırtlan",
    "geyik",
    "ceylan",
    "karaca",
    "antilop",
    "manda",
    "inek",
    "boğa",
    "öküz",
    "koyun",
    "keçi",
    "at",
    "eşek",
    "katır",
    "domuz",
    "tavşan",
    "sincap",
    "fare",
    "hamster",
    "kirpi",
    "köstebek",
    "yarasa",
    "deve",
    "lama",
    "alpaka",
    "rakun",
    "kunduz",
    "su samuru",
    "porsuk",
    "sansar",
    "gelincik",
    "misk kedisi",
    "fok",
    "deniz aslanı",
    "mors",
    "yunus",
    "balina",
    "orka",
    "köpek balığı",
    "vatoz",
    "ahtapot",
    "kalamar",
    "mürekkep balığı",
    "denizanası",
    "deniz yıldızı",
    "denizatı",
    "yengeç",
    "ıstakoz",
    "karides",
    "midye",
    "istiridye",
    "salyangoz",
    "solucan",
    "kelebek",
    "arı",
    "eşek arısı",
    "karınca",
    "sinek",
    "sivrisinek",
    "hamam böceği",
    "çekirge",
    "cırcır böceği",
    "uğur böceği",
    "yusufçuk",
    "örümcek",
    "akrep",
    "kene",
    "kırkayak",
    "tırtıl",
    "yılan",
    "kobra",
    "piton",
    "anakonda",
    "timsah",
    "kertenkele",
    "iguana",
    "bukalemun",
    "kaplumbağa",
    "kurbağa",
    "semender",
    "kartal",
    "şahin",
    "doğan",
    "atmaca",
    "baykuş",
    "karga",
    "kuzgun",
    "serçe",
    "güvercin",
    "martı",
    "pelikan",
    "flamingo",
    "leylek",
    "turna",
    "kuğu",
    "ördek",
    "kaz",
    "tavuk",
    "horoz",
    "hindi",
    "devekuşu",
    "penguen",
    "papağan",
    "tavus kuşu",
    "bıldırcın",
    "keklik",
    "balık",
    "somon",
    "ton balığı",
    "sazan",
    "hamsi",
    "levrek",
    "çipura",
    "palamut",
    "uskumru",
    "alabalık"
];


function startAnimalRush() {

    clearInterval(animalRushTimer);

    animalRushTime = 10;
    animalRushAnswers = [];
    animalRushRejected = [];

    const gameArea =
        document.getElementById("randomGameArea");

    gameArea.innerHTML = `

        <div class="animal-rush">

            <div class="animal-rush-top">

                <div>
                    <span class="animal-small-label">
                        KALAN SÜRE
                    </span>

                    <strong id="animalRushTime">
                        10
                    </strong>
                </div>

                <div>
                    <span class="animal-small-label">
                        BULUNAN
                    </span>

                    <strong id="animalRushProgress">
                        0 / 5
                    </strong>
                </div>

            </div>


            <div class="animal-progress">

                <div
                    id="animalProgressBar"
                    class="animal-progress-bar"
                ></div>

            </div>


            <p class="animal-instruction">
                Bir hayvan yaz ve ENTER'a bas.
            </p>


            <input
                id="animalRushInput"
                class="animal-rush-input"
                type="text"
                placeholder="Örn: Kaplan"
                autocomplete="off"
                maxlength="25"
            >


            <div
                id="animalRushMessage"
                class="animal-rush-message"
            >
                HAZIR...
            </div>


            <div
                id="animalRushList"
                class="animal-rush-list"
            ></div>
<div
    id="animalRushRejectedList"
    class="animal-rush-rejected-list"
></div>
        </div>
    `;


    const input =
        document.getElementById(
            "animalRushInput"
        );

    input.focus();


    input.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                submitAnimalRush();
            }
        }
    );


    animalRushTimer = setInterval(() => {

        animalRushTime--;

        const timeElement =
            document.getElementById(
                "animalRushTime"
            );


        /*
           Başka evente geçildiyse
           timerı kapat.
        */

        if (!timeElement) {

            clearInterval(
                animalRushTimer
            );

            animalRushTimer = null;

            return;
        }


        timeElement.textContent =
            animalRushTime;


        if (animalRushTime <= 3) {

            timeElement.classList.add(
                "animal-time-danger"
            );
        }


        if (animalRushTime <= 0) {

            clearInterval(
                animalRushTimer
            );

            animalRushTimer = null;

            finishAnimalRush(false);
        }

    }, 1000);
}


/* =========================================
   HAYVAN EKLE
========================================= */

function submitAnimalRush() {

    const input =
        document.getElementById(
            "animalRushInput"
        );

    const message =
        document.getElementById(
            "animalRushMessage"
        );

    if (!input) {
        return;
    }


    const originalValue =
        input.value.trim();


    const value =
        originalValue.toLocaleLowerCase(
            "tr-TR"
        );


    if (!value) {
        return;
    }


    /* =====================================
       LİSTEDE OLMAYAN CEVAP
    ===================================== */

    if (!validAnimals.includes(value)) {

        animalRushRejected.push(
            originalValue
        );

        message.textContent =
            `"${originalValue}" SAYILMADI`;

        message.classList.add(
            "animal-message-error"
        );

        input.value = "";

        updateAnimalRush();

        input.focus();

        return;
    }


    /* =====================================
       AYNI HAYVANI TEKRAR YAZDI
    ===================================== */

    if (
        animalRushAnswers.some(
            animal =>
                animal.value === value
        )
    ) {

        animalRushRejected.push(
            `${originalValue} (tekrar)`
        );

        message.textContent =
            `"${originalValue}" ZATEN YAZILDI`;

        message.classList.add(
            "animal-message-error"
        );

        input.value = "";

        updateAnimalRush();

        input.focus();

        return;
    }


    /* =====================================
       DOĞRU HAYVAN
    ===================================== */

    message.classList.remove(
        "animal-message-error"
    );


    animalRushAnswers.push({
        value: value,
        display: originalValue
    });


    input.value = "";

    message.textContent =
        "DOĞRU ✓";


    updateAnimalRush();


    /* SADECE 5 DOĞRU HAYVAN BİTİRİR */

    if (animalRushAnswers.length >= 5) {

        clearInterval(
            animalRushTimer
        );

        animalRushTimer = null;

        finishAnimalRush(true);

        return;
    }


    input.focus();
}


function updateAnimalRush() {

    const progress =
        document.getElementById(
            "animalRushProgress"
        );

    const bar =
        document.getElementById(
            "animalProgressBar"
        );

    const list =
        document.getElementById(
            "animalRushList"
        );

    const rejectedList =
        document.getElementById(
            "animalRushRejectedList"
        );


    if (
        !progress ||
        !bar ||
        !list
    ) {
        return;
    }


    /* SADECE DOĞRULAR PUAN */

    progress.textContent =
        `${animalRushAnswers.length} / 5`;


    bar.style.width =
        `${(animalRushAnswers.length / 5) * 100}%`;


    /* DOĞRU HAYVANLAR */

    list.innerHTML =
        animalRushAnswers
            .map(
                (animal, index) => `
                    <span class="animal-answer">
                        ✓ ${animal.display}
                    </span>
                `
            )
            .join("");


    /* SAYILMAYANLAR */

    if (rejectedList) {

        if (animalRushRejected.length === 0) {

            rejectedList.innerHTML = "";

        } else {

            rejectedList.innerHTML = `

                <p class="animal-rejected-title">
                    SAYILMAYANLAR
                </p>

                <div class="animal-rejected-items">

                    ${animalRushRejected
                        .map(
                            item => `
                                <span class="animal-rejected">
                                    × ${item}
                                </span>
                            `
                        )
                        .join("")}

                </div>
            `;
        }
    }
}


/* =========================================
   OYUN BİTTİ
========================================= */

function finishAnimalRush(success) {

    clearInterval(animalRushTimer);

    animalRushTimer = null;


    const gameArea =
        document.getElementById(
            "randomGameArea"
        );


    if (!gameArea) {
        return;
    }


    if (success) {

        gameArea.innerHTML = `

            <div class="random-final-result">

                <div class="random-result-emoji">
                    🐾
                </div>

                <p class="random-result-label">
                    TAMAMLANDI
                </p>

                <h3>
                    5 / 5
                </h3>

                <p>
                    Süre dolmadan beş farklı
                    hayvan yazdın.
                </p>

                <div class="animal-final-list">

                    ${animalRushAnswers
                        .map(
                            animal => `
                                <span>
                                    ${animal.display}
                                </span>
                            `
                        )
                        .join("")}

                </div>

            </div>
        `;

    } else {

        gameArea.innerHTML = `

            <div class="random-final-result">

                <div class="random-result-emoji">
                    ⏱️
                </div>

                <p class="random-result-label">
                    SÜRE DOLDU
                </p>

                <h3>
                    ${animalRushAnswers.length} / 5
                </h3>

                <p>
                    10 saniyede
                    ${animalRushAnswers.length}
                    farklı cevap yazdın.
                </p>

                <button
                    class="random-action-button challenge-retry"
                    onclick="startAnimalRush()"
                >
                    TEKRAR DENE
                    <span>↻</span>
                </button>

            </div>
        `;
    }
}
/* =========================================
   05 — RENK TUZAĞI
========================================= */

let colorTrapStartTime = 0;
let colorTrapFound = 0;
let colorTrapPenalty = 0;
let colorTrapFinished = false;


/* =========================================
   RENKLER
========================================= */

const colorTrapColors = [
    {
        name: "MAVİ",
        color: "#3b82f6"
    },
    {
        name: "KIRMIZI",
        color: "#ef4444"
    },
    {
        name: "YEŞİL",
        color: "#22c55e"
    },
    {
        name: "SARI",
        color: "#eab308"
    },
    {
        name: "MOR",
        color: "#a855f7"
    },
    {
        name: "TURUNCU",
        color: "#f97316"
    }
];


/* =========================================
   OYUNU BAŞLAT
========================================= */

function startColorTrap() {

    colorTrapFound = 0;
    colorTrapPenalty = 0;
    colorTrapFinished = false;


    /*
       Kartların GERÇEK yazı renkleri.
       Tam olarak 3 tanesi MAVİ.
    */

    const realColors = [
        "MAVİ",
        "MAVİ",
        "MAVİ",
        "KIRMIZI",
        "KIRMIZI",
        "YEŞİL",
        "YEŞİL",
        "SARI",
        "SARI",
        "MOR",
        "MOR",
        "TURUNCU"
    ];


    shuffleColorTrap(realColors);


    /*
       Kartları oluştur.
    */

    const cards = realColors.map(
        (realColorName, index) => {

            const realColor =
                colorTrapColors.find(
                    color =>
                        color.name ===
                        realColorName
                );


            /*
               Kartta yazacak renk ismi,
               gerçek yazı renginden farklı olsun.
            */

            const possibleWords =
                colorTrapColors.filter(
                    color =>
                        color.name !==
                        realColorName
                );


            const randomWord =
                possibleWords[
                    Math.floor(
                        Math.random() *
                        possibleWords.length
                    )
                ];


            return {
                id: index,
                word: randomWord.name,
                realColor: realColorName,
                cssColor: realColor.color
            };
        }
    );


    const gameArea =
        document.getElementById(
            "randomGameArea"
        );


    if (!gameArea) {
        return;
    }


    gameArea.innerHTML = `

        <div class="color-trap-game">

            <div class="color-trap-stats">

                <div>
                    <span>
                        BULUNAN
                    </span>

                    <strong id="colorTrapFound">
                        0 / 3
                    </strong>
                </div>


                <div>
                    <span>
                        CEZA
                    </span>

                    <strong id="colorTrapPenalty">
                        +0 SN
                    </strong>
                </div>

            </div>


            <div class="color-trap-instruction">

                <strong>
                    MAVİ RENKTE
                </strong>

                yazılmış 3 kelimeyi bul.

                <small>
                    Kelimenin ne yazdığına kanma.
                </small>

            </div>


            <div class="color-trap-grid">

                ${cards.map(
                    card => `

                        <button
                            class="color-trap-card"

                            style="
                                color:
                                ${card.cssColor};
                            "

                            onclick="
                                selectColorTrap(
                                    this,
                                    '${card.realColor}'
                                )
                            "
                        >
                            ${card.word}
                        </button>

                    `
                ).join("")}

            </div>


            <div
                id="colorTrapFeedback"
                class="color-trap-feedback"
            >
                3 MAVİYİ BUL
            </div>

        </div>
    `;


    /*
       Kartlar göründüğü anda
       kronometre başlar.
    */

    colorTrapStartTime =
        performance.now();
}


/* =========================================
   KARTA TIKLANDI
========================================= */

function selectColorTrap(
    button,
    realColor
) {

    if (
        colorTrapFinished ||
        button.disabled
    ) {
        return;
    }


    const feedback =
        document.getElementById(
            "colorTrapFeedback"
        );


    /*
       DOĞRU
    */

    if (realColor === "MAVİ") {

        button.disabled = true;

        button.classList.add(
            "color-trap-correct"
        );


        colorTrapFound++;


        const found =
            document.getElementById(
                "colorTrapFound"
            );


        if (found) {

            found.textContent =
                `${colorTrapFound} / 3`;
        }


        if (feedback) {

            feedback.textContent =
                "DOĞRU ✓";

            feedback.classList.remove(
                "color-trap-feedback-wrong"
            );
        }


        /*
           3 mavinin tamamı bulundu.
        */

        if (colorTrapFound >= 3) {

            colorTrapFinished = true;


            setTimeout(() => {

                finishColorTrap();

            }, 400);
        }


        return;
    }


    /*
       YANLIŞ
       Her yanlış +1 saniye.
    */

    colorTrapPenalty++;


    const penalty =
        document.getElementById(
            "colorTrapPenalty"
        );


    if (penalty) {

        penalty.textContent =
            `+${colorTrapPenalty} SN`;
    }


    if (feedback) {

        feedback.textContent =
            "RENGE BAK, KELİMEYE DEĞİL.";

        feedback.classList.add(
            "color-trap-feedback-wrong"
        );
    }


    /*
       Yanlış karta küçük sarsılma
       sınıfını yeniden tetikle.
    */

    button.classList.remove(
        "color-trap-wrong"
    );

    void button.offsetWidth;

    button.classList.add(
        "color-trap-wrong"
    );
}


/* =========================================
   OYUN BİTTİ
========================================= */

function finishColorTrap() {

    const rawTime =
        (
            performance.now() -
            colorTrapStartTime
        ) / 1000;


    const finalTime =
        rawTime +
        colorTrapPenalty;


    const gameArea =
        document.getElementById(
            "randomGameArea"
        );


    if (!gameArea) {
        return;
    }


    gameArea.innerHTML = `

        <div class="random-final-result">

            <div class="random-result-emoji">
                🎨
            </div>

            <p class="random-result-label">
                TAMAMLANDI
            </p>

            <h3>
                ${finalTime.toFixed(1)}
                SANİYE
            </h3>

            <p>
                Üç mavi rengi de buldun.
            </p>


            <div class="color-trap-result">

                <div>

                    <span>
                        GERÇEK SÜRE
                    </span>

                    <strong>
                        ${rawTime.toFixed(1)} sn
                    </strong>

                </div>


                <div>

                    <span>
                        HATA
                    </span>

                    <strong>
                        ${colorTrapPenalty}
                    </strong>

                </div>


                <div>

                    <span>
                        CEZA
                    </span>

                    <strong>
                        +${colorTrapPenalty} sn
                    </strong>

                </div>

            </div>


            <button
                class="random-action-button color-trap-retry"
                onclick="startColorTrap()"
            >
                TEKRAR OYNA
                <span>↻</span>
            </button>

        </div>
    `;
}


/* =========================================
   KARIŞTIR
========================================= */

function shuffleColorTrap(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }


    return array;
}

/* =========================================
   06 — GEÇMİŞ Mİ, GELECEK Mİ?
========================================= */

function selectTimeChoice(choice) {

    const gameArea =
        document.getElementById("randomGameArea");

    if (!gameArea) {
        return;
    }


    /* =========================
       GEÇMİŞ SEÇİLDİ
    ========================= */

    if (choice === "past") {

        gameArea.innerHTML = `

            <div class="time-choice-question">

                <div class="time-choice-question-icon">
                    ←
                </div>

                <span class="time-choice-question-label">
                    GEÇMİŞİ SEÇTİN
                </span>

                <h3>
                    Oraya neden dönmek isterdin?
                </h3>

                <p>
                    Sadece birini seçebilirsin.
                </p>


                <div class="time-choice-answer-grid">

                    <button
                        onclick="
                            finishTimeChoice(
                                'past',
                                'change'
                            )
                        "
                    >
                        <span>↺</span>

                        <strong>
                            BİR ŞEYİ DEĞİŞTİRMEK
                        </strong>

                        <small>
                            Farklı bir karar verirdim.
                        </small>
                    </button>


                    <button
                        onclick="
                            finishTimeChoice(
                                'past',
                                'relive'
                            )
                        "
                    >
                        <span>♡</span>

                        <strong>
                            BİR ANI TEKRAR YAŞAMAK
                        </strong>

                        <small>
                            Hiçbir şeyi değiştirmezdim.
                        </small>
                    </button>

                </div>

            </div>
        `;

        return;
    }


    /* =========================
       GELECEK SEÇİLDİ
    ========================= */

    if (choice === "future") {

        gameArea.innerHTML = `

            <div class="time-choice-question">

                <div class="time-choice-question-icon">
                    →
                </div>

                <span class="time-choice-question-label">
                    GELECEĞİ SEÇTİN
                </span>

                <h3>
                    Orada en çok neyi öğrenmek isterdin?
                </h3>

                <p>
                    Sadece birini seçebilirsin.
                </p>


                <div class="time-choice-answer-grid">

                    <button
                        onclick="
                            finishTimeChoice(
                                'future',
                                'myself'
                            )
                        "
                    >
                        <span>◎</span>

                        <strong>
                            KENDİ GELECEĞİMİ
                        </strong>

                        <small>
                            Hayatımın nereye gittiğini görmek.
                        </small>
                    </button>


                    <button
                        onclick="
                            finishTimeChoice(
                                'future',
                                'world'
                            )
                        "
                    >
                        <span>⌁</span>

                        <strong>
                            DÜNYANIN GELECEĞİNİ
                        </strong>

                        <small>
                            İnsanlığın nereye vardığını görmek.
                        </small>
                    </button>

                </div>

            </div>
        `;

        return;
    }
}
function finishTimeChoice(direction, answer) {

    const gameArea =
        document.getElementById("randomGameArea");

    if (!gameArea) {
        return;
    }


    let icon = "";
    let label = "";
    let title = "";
    let text = "";


    /* =========================
       GEÇMİŞ
    ========================= */

    if (
        direction === "past" &&
        answer === "change"
    ) {
        icon = "↺";
        label = "GEÇMİŞ • DEĞİŞTİRMEK";
        title = "Aklında hâlâ kapanmamış bir kapı var.";
        text =
            "Geçmişe dönüp bir şeyi değiştirmeyi seçtin. " +
            "Senin için zamanda yolculuk, sadece eskiyi görmek değil; " +
            "başka türlü sonuçlanabilecek bir ana yeniden dokunmak demek.";
    }


    if (
        direction === "past" &&
        answer === "relive"
    ) {
        icon = "♡";
        label = "GEÇMİŞ • TEKRAR YAŞAMAK";
        title = "Bazı anların ikinci kez yaşanmaya değer.";
        text =
            "Hiçbir şeyi değiştirmeden bir anı tekrar yaşamayı seçtin. " +
            "Senin için geçmişin değeri, hataları düzeltmekten çok " +
            "kaybolmasını istemediğin anlarda saklı.";
    }


    /* =========================
       GELECEK
    ========================= */

    if (
        direction === "future" &&
        answer === "myself"
    ) {
        icon = "◎";
        label = "GELECEK • SEN";
        title = "En büyük merakın kendi hikâyenin devamı.";
        text =
            "Gelecekte önce kendine bakmayı seçtin. " +
            "Nerede olacağını, kim olacağını ve bugün verdiğin " +
            "kararların seni nereye götürdüğünü görmek istiyorsun."+
            "Fakat bu sadecebir tuşa basmak kadar kolay değil"
            "Bunun için daha fazla çabalaman gerek :)";
    }


    if (
        direction === "future" &&
        answer === "world"
    ) {
        icon = "⌁";
        label = "GELECEK • DÜNYA";
        title = "Sen gittikten sonra ne olacağını merak ediyorsun.";
        text =
            "Kendi hayatından önce dünyanın geleceğini görmeyi seçtin. " +
            "Teknolojinin, insanların ve yaşamın ne kadar değişeceği " +
            "senin için kişisel geleceğinden bile daha büyük bir bilinmez.";
    }


    gameArea.innerHTML = `

        <div class="time-choice-result">

            <div class="time-choice-result-icon">
                ${icon}
            </div>

            <span class="time-choice-result-label">
                ${label}
            </span>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

            <div class="time-choice-result-line"></div>

            <small class="time-choice-result-note">
                Bu bir kişilik testi değil.
                Sadece seçiminin arkasındaki fikri gösteriyor.
            </small>

            <button
                class="random-secondary-button"
                onclick="playTimeChoiceAgain()"
            >
                TEKRAR SEÇ
            </button>

        </div>
    `;
}


/* =========================================
   TEKRAR OYNA
========================================= */

function playTimeChoiceAgain() {

    const gameArea =
        document.getElementById("randomGameArea");

    if (!gameArea) {
        return;
    }

    gameArea.innerHTML = `

        <div class="time-choice-intro">

            <p>
                Bir seçim yapman gerekiyor.
            </p>

            <span>
                Kararını verdikten sonra
                sana bir soru daha soracağım.
            </span>

        </div>


        <div class="time-choice-buttons">

            <button
                class="
                    time-choice-button
                    time-choice-past
                "
                onclick="selectTimeChoice('past')"
            >

                <span class="time-choice-icon">
                    ←
                </span>

                <div>
                    <small>
                        GERİ DÖN
                    </small>

                    <strong>
                        GEÇMİŞE GİT
                    </strong>
                </div>

            </button>


            <button
                class="
                    time-choice-button
                    time-choice-future
                "
                onclick="selectTimeChoice('future')"
            >

                <div>
                    <small>
                        İLERİ GİT
                    </small>

                    <strong>
                        GELECEĞE GİT
                    </strong>
                </div>

                <span class="time-choice-icon">
                    →
                </span>

            </button>

        </div>
    `;
}

/* =========================================================
   03 — BEYNİNİ YAK
========================================================= */

const brainExperiments = [

    {
        id: "montyHall",
        number: "01",
        icon: "🚪",
        type: "OLASILIK",
        title: "Monty Hall Problemi",
        description:
            "Üç kapı. Tek ödül. Bir seçim. Sonra fikrini değiştirme şansı."
    },

    {
        id: "birthday",
        number: "02",
        icon: "🎂",
        type: "OLASILIK",
        title: "Doğum Günü Paradoksu",
        description:
            "Sadece 23 kişi. Ama sonuç düşündüğünden çok daha garip."
    },

    {
        id: "bertrand",
        number: "03",
        icon: "🪙",
        type: "MANTIK",
        title: "Bertrand Kutuları",
        description:
            "Bir altın para gördün. Diğer taraf gerçekten %50 mi?"
    },

    {
        id: "prisoners",
        number: "04",
        icon: "🔐",
        type: "STRATEJİ",
        title: "100 Mahkûm Problemi",
        description:
            "100 kişi. 100 kutu. Herkesin kurtulması gerekiyor."
    },

    {
        id: "envelopes",
        number: "05",
        icon: "✉️",
        type: "PARADOKS",
        title: "İki Zarf Paradoksu",
        description:
            "Diğer zarfa geçmek her zaman avantajlı görünüyorsa bir şeyler ters."
    },

    {
        id: "execution",
        number: "06",
        icon: "📅",
        type: "PARADOKS",
        title: "Beklenmedik İdam",
        description:
            "Bir olay hem tahmin edilemez hem de önceden söylenmiş olabilir mi?"
    }

];


let currentBrainIndex = 0;

let montyPrizeDoor = null;
let montyPlayerDoor = null;
let montyOpenedDoor = null;

let bertrandSelectedBox = null;


/* =========================================================
   ANA BEYNİNİ YAK EKRANI
========================================================= */

function createBrainExperience() {

    return `

        <div class="brain-experience">

            <div class="brain-header">

                <span class="brain-section-label">
                    03 — BEYNİNİ YAK
                </span>

                <h2>
                    Sezgilerine ne kadar güveniyorsun?
                </h2>

                <p>
                    Burada ilk aklına gelen cevap
                    genellikle en tehlikeli olanı.
                </p>

            </div>


            <div
                id="brainGameArea"
                class="brain-game-area"
            >

                ${createBrainMenu()}

            </div>

        </div>
    `;
}


/* =========================================================
   DENEY MENÜSÜ
========================================================= */

function createBrainMenu() {

    return `

        <div class="brain-menu">

            ${brainExperiments.map(
                (experiment, index) => `

                    <button
                        class="brain-menu-card"
                        onclick="
                            openBrainExperiment(${index})
                        "
                    >

                        <div class="brain-menu-number">
                            ${experiment.number}
                        </div>

                        <div class="brain-menu-icon">
                            ${experiment.icon}
                        </div>

                        <div class="brain-menu-content">

                            <span>
                                ${experiment.type}
                            </span>

                            <h3>
                                ${experiment.title}
                            </h3>

                            <p>
                                ${experiment.description}
                            </p>

                        </div>

                        <div class="brain-menu-arrow">
                            →
                        </div>

                    </button>

                `
            ).join("")}

        </div>
    `;
}


/* =========================================================
   DENEY AÇ
========================================================= */

function openBrainExperiment(index) {

    currentBrainIndex = index;

    const experiment =
        brainExperiments[index];

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    if (experiment.id === "montyHall") {

        area.innerHTML =
            createMontyHall();

        return;
    }


    if (experiment.id === "birthday") {

        area.innerHTML =
            createBirthdayParadox();

        return;
    }


    if (experiment.id === "bertrand") {

        area.innerHTML =
            createBertrand();

        return;
    }


    if (experiment.id === "prisoners") {

        area.innerHTML =
            createPrisoners();

        return;
    }


    if (experiment.id === "envelopes") {

        area.innerHTML =
            createEnvelopes();

        return;
    }


    if (experiment.id === "execution") {

        area.innerHTML =
            createExecution();

        return;
    }
}


/* =========================================================
   ORTAK ÜST ALAN
========================================================= */

function createBrainTop(experiment) {

    return `

        <div class="brain-experiment-top">

            <button
                class="brain-back-button"
                onclick="backToBrainMenu()"
            >
                ← TÜM DENEYLER
            </button>


            <div class="brain-experiment-badge">

                <span>
                    ${experiment.icon}
                </span>

                ${experiment.type}

            </div>

        </div>

    `;
}


/* =========================================================
   GERİ DÖN
========================================================= */

function backToBrainMenu() {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }

    area.innerHTML =
        createBrainMenu();
}


/* =========================================================
   SONRAKİ DENEY
========================================================= */

function nextBrainExperiment() {

    currentBrainIndex++;

    if (
        currentBrainIndex >=
        brainExperiments.length
    ) {
        currentBrainIndex = 0;
    }

    openBrainExperiment(
        currentBrainIndex
    );
}


/* =========================================================
   ORTAK SONRAKİ BUTONU
========================================================= */

function createBrainNextButton() {

    return `

        <button
            class="brain-next-button"
            onclick="nextBrainExperiment()"
        >
            BEYNİMİ BİR DAHA YAK
            <span>→</span>
        </button>

    `;
}


/* =========================================================
   01 — MONTY HALL
========================================================= */

function createMontyHall() {

    montyPrizeDoor =
        Math.floor(
            Math.random() * 3
        ) + 1;

    montyPlayerDoor = null;
    montyOpenedDoor = null;


    return `

        ${createBrainTop(
            brainExperiments[0]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                DENEY 01
            </span>

            <h3>
                Üç kapıdan birini seç.
            </h3>

            <p>
                Bir kapının arkasında ödül var.
                Diğer ikisi boş.
            </p>

        </div>


        <div class="monty-doors">

            ${[1, 2, 3].map(
                door => `

                    <button
                        class="monty-door"
                        onclick="
                            chooseMontyDoor(${door})
                        "
                    >

                        <span>
                            KAPI
                        </span>

                        <strong>
                            ${door}
                        </strong>

                        <small>
                            SEÇ
                        </small>

                    </button>

                `
            ).join("")}

        </div>


        <div
            id="montyStatus"
            class="brain-status"
        >
            Bir kapı seç.
        </div>

    `;
}


/* =========================================================
   MONTY — İLK KAPI SEÇİMİ
========================================================= */

function chooseMontyDoor(door) {

    if (montyPlayerDoor !== null) {
        return;
    }


    montyPlayerDoor = door;


    const possibleDoors =
        [1, 2, 3].filter(
            currentDoor =>
                currentDoor !==
                    montyPlayerDoor &&
                currentDoor !==
                    montyPrizeDoor
        );


    montyOpenedDoor =
        possibleDoors[
            Math.floor(
                Math.random() *
                possibleDoors.length
            )
        ];


    const status =
        document.getElementById(
            "montyStatus"
        );


    if (!status) {
        return;
    }


    status.innerHTML = `

        <div class="monty-reveal">

            <span class="brain-mini-label">
                SEN KAPI ${montyPlayerDoor}'İ SEÇTİN
            </span>

            <div class="monty-opened-door">
                KAPI ${montyOpenedDoor} BOŞ ÇIKTI.
            </div>

            <h4>
                Şimdi ne yapacaksın?
            </h4>

            <p>
                İlk seçiminde kalabilir
                veya kalan kapıya geçebilirsin.
            </p>

            <div class="brain-choice-buttons">

                <button
                    onclick="
                        finishMonty(false)
                    "
                >
                    SEÇİMİMDE KAL
                </button>

                <button
                    onclick="
                        finishMonty(true)
                    "
                >
                    KAPIYI DEĞİŞTİR
                </button>

            </div>

        </div>
    `;


    document
        .querySelectorAll(
            ".monty-door"
        )
        .forEach(
            (button, index) => {

                const doorNumber =
                    index + 1;


                if (
                    doorNumber ===
                    montyOpenedDoor
                ) {

                    button.classList.add(
                        "monty-door-opened"
                    );

                    button.innerHTML = `

                        <span>
                            KAPI
                        </span>

                        <strong>
                            ${doorNumber}
                        </strong>

                        <small>
                            BOŞ
                        </small>

                    `;
                }


                if (
                    doorNumber ===
                    montyPlayerDoor
                ) {

                    button.classList.add(
                        "monty-door-selected"
                    );
                }

            }
        );
}


/* =========================================================
   MONTY — SONUÇ
========================================================= */

function finishMonty(changeDoor) {

    let finalDoor =
        montyPlayerDoor;


    if (changeDoor) {

        finalDoor =
            [1, 2, 3].find(
                door =>
                    door !==
                        montyPlayerDoor &&
                    door !==
                        montyOpenedDoor
            );
    }


    const won =
        finalDoor ===
        montyPrizeDoor;


    const area =
        document.getElementById(
            "brainGameArea"
        );


    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[0]
        )}


        <div class="brain-result">

            <div class="brain-result-icon">
                ${won ? "🏆" : "🧠"}
            </div>

            <span class="brain-result-label">
                ${won ? "ÖDÜLÜ BULDUN" : "BU TUR KAÇTI"}
            </span>

            <h3>
                ${
                    changeDoor
                        ? "Kapıyı değiştirdin."
                        : "İlk seçiminde kaldın."
                }
            </h3>

            <p>
                Ödül KAPI ${montyPrizeDoor}'deydi.
                Sen KAPI ${finalDoor}'yi seçtin.
            </p>


            <div class="brain-explanation">

                <span>
                    BEYNİ YAKAN KISIM
                </span>

                <strong>
                    Kapıyı değiştirmek kazanma
                    ihtimalini %33'ten yaklaşık
                    %67'ye çıkarır.
                </strong>

                <p>
                    İlk seçtiğin kapının doğru olma
                    ihtimali başlangıçta 1/3'tür.
                    Diğer iki kapının toplam ihtimali
                    2/3'tür. Sunucu o iki kapıdan
                    boş olanı bilinçli olarak açınca,
                    o 2/3'lük ihtimal kalan kapıda
                    toplanır.
                </p>

            </div>


            <button
                class="brain-secondary-button"
                onclick="
                    openBrainExperiment(0)
                "
            >
                TEKRAR DENE
            </button>


            ${createBrainNextButton()}

        </div>
    `;
}


/* =========================================================
   02 — DOĞUM GÜNÜ PARADOKSU
========================================================= */

function createBirthdayParadox() {

    return `

        ${createBrainTop(
            brainExperiments[1]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                DENEY 02
            </span>

            <div class="brain-big-symbol">
                23
            </div>

            <h3>
                Bir odada 23 kişi var.
            </h3>

            <p>
                En az iki kişinin aynı
                doğum gününe sahip olma
                ihtimali sence kaç?
            </p>


            <div class="brain-answer-grid">

                <button
                    onclick="
                        answerBirthday('low')
                    "
                >
                    %10'DAN AZ
                </button>

                <button
                    onclick="
                        answerBirthday('quarter')
                    "
                >
                    YAKLAŞIK %25
                </button>

                <button
                    onclick="
                        answerBirthday('half')
                    "
                >
                    %50'DEN FAZLA
                </button>

                <button
                    onclick="
                        answerBirthday('high')
                    "
                >
                    %90'DAN FAZLA
                </button>

            </div>

        </div>
    `;
}


function answerBirthday(answer) {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    const correct =
        answer === "half";


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[1]
        )}


        <div class="brain-result">

            <div class="brain-result-icon">
                🎂
            </div>

            <span class="brain-result-label">
                ${correct ? "DOĞRU" : "SEZGİN SENİ YANILTTI"}
            </span>

            <h3>
                Yaklaşık %50,7.
            </h3>

            <p>
                Yani sadece 23 kişilik
                bir grupta bile ihtimal
                yarıyı geçiyor.
            </p>


            <div class="brain-explanation">

                <span>
                    NEDEN?
                </span>

                <strong>
                    Çünkü tek bir kişinin
                    doğum gününü tahmin etmiyoruz.
                </strong>

                <p>
                    23 kişi arasında 253 farklı
                    kişi çifti vardır. Karşılaştırılan
                    çiftlerin sayısı çok hızlı arttığı
                    için en az bir eşleşme ihtimali
                    beklenenden çok daha erken
                    %50'yi geçer.
                </p>

            </div>


            ${createBrainNextButton()}

        </div>
    `;
}


/* =========================================================
   03 — BERTRAND KUTULARI
========================================================= */

function createBertrand() {

    bertrandSelectedBox = null;


    return `

        ${createBrainTop(
            brainExperiments[2]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                DENEY 03
            </span>

            <h3>
                Önünde üç kapalı kutu var.
            </h3>

            <p>
                Birinde iki altın para,
                birinde iki gümüş para,
                diğerinde bir altın ve
                bir gümüş para var.
            </p>

            <div class="bertrand-box-info">

                <div>
                    🟡 🟡
                </div>

                <div>
                    ⚪ ⚪
                </div>

                <div>
                    🟡 ⚪
                </div>

            </div>

            <p class="brain-question-secondary">
                Kutular karıştırıldı.
                Rastgele bir kutu seç.
            </p>


            <div class="bertrand-boxes">

                <button
                    onclick="
                        chooseBertrandBox(1)
                    "
                >
                    ?
                </button>

                <button
                    onclick="
                        chooseBertrandBox(2)
                    "
                >
                    ?
                </button>

                <button
                    onclick="
                        chooseBertrandBox(3)
                    "
                >
                    ?
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   BERTRAND — KUTU SEÇ
========================================================= */

function chooseBertrandBox(box) {

    bertrandSelectedBox = box;


    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[2]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                BİR ALTIN PARA ÇEKTİN
            </span>

            <div class="brain-big-symbol">
                🟡
            </div>

            <h3>
                Kutudaki diğer para da
                altın olma ihtimali nedir?
            </h3>


            <div class="brain-answer-grid">

                <button
                    onclick="
                        answerBertrand('half')
                    "
                >
                    %50
                </button>

                <button
                    onclick="
                        answerBertrand('third')
                    "
                >
                    %33
                </button>

                <button
                    onclick="
                        answerBertrand('twothirds')
                    "
                >
                    %66,7
                </button>

                <button
                    onclick="
                        answerBertrand('certain')
                    "
                >
                    %100
                </button>

            </div>

        </div>
    `;
}


function answerBertrand(answer) {

    const correct =
        answer === "twothirds";


    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[2]
        )}


        <div class="brain-result">

            <div class="brain-result-icon">
                🪙
            </div>

            <span class="brain-result-label">
                ${correct ? "DOĞRU" : "TUZAK %50'YDİ"}
            </span>

            <h3>
                Cevap 2/3.
            </h3>

            <p>
                Altın gördüğünde geriye
                yalnızca iki kutu kalmış
                gibi düşünmek yanıltıcıdır.
            </p>


            <div class="brain-explanation">

                <span>
                    ÜÇ OLASI ALTIN
                </span>

                <strong>
                    🟡A — 🟡B — 🟡C
                </strong>

                <p>
                    Altın-altın kutusunda iki farklı
                    altın para vardır. Altın-gümüş
                    kutusunda ise yalnızca bir altın
                    vardır. Gördüğün altının bu üç
                    altın yüzünden herhangi biri
                    olması düşünüldüğünde, üç
                    durumun ikisinde diğer para
                    da altındır.
                </p>

            </div>


            ${createBrainNextButton()}

        </div>
    `;
}


/* =========================================================
   04 — 100 MAHKÛM
========================================================= */

function createPrisoners() {

    return `

        ${createBrainTop(
            brainExperiments[3]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                DENEY 04
            </span>

            <div class="brain-big-symbol">
                100
            </div>

            <h3>
                100 mahkûm.
                100 kutu.
            </h3>

            <p>
                Kutuların içinde 1–100
                numaraları rastgele dağıtılmış.
                Her mahkûm en fazla 50 kutu açabilir.
            </p>


            <div class="prisoner-rule">

                Herkes kendi numarasını bulursa
                herkes kurtulur.

                <strong>
                    Tek kişi bile bulamazsa
                    herkes kaybeder.
                </strong>

            </div>


            <h4 class="brain-sub-question">
                Rastgele 50 kutu açarlarsa,
                grubun tamamının kurtulma
                ihtimali sence nedir?
            </h4>


            <div class="brain-answer-grid">

                <button
                    onclick="
                        answerPrisoners('half')
                    "
                >
                    YAKLAŞIK %50
                </button>

                <button
                    onclick="
                        answerPrisoners('quarter')
                    "
                >
                    YAKLAŞIK %25
                </button>

                <button
                    onclick="
                        answerPrisoners('tiny')
                    "
                >
                    NEREDEYSE SIFIR
                </button>

            </div>

        </div>
    `;
}


function answerPrisoners(answer) {

    const correct =
        answer === "tiny";


    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[3]
        )}


        <div class="brain-result">

            <span class="brain-result-label">
                ${correct ? "DOĞRU" : "DAHA DA KÖTÜ"}
            </span>

            <h3>
                Rastgele seçimde şansları
                neredeyse sıfır.
            </h3>

            <p>
                Her kişinin tek başına
                başarı ihtimali %50 olsa da
                100 kişinin de aynı anda
                başarması gerekir.
            </p>


            <div class="brain-explanation">

                <span>
                    AMA BİR STRATEJİ VAR
                </span>

                <strong>
                    Başarı ihtimali yaklaşık
                    %31'e çıkabiliyor.
                </strong>

                <p>
                    Her mahkûm önce kendi
                    numarasının yazdığı kutuyu açar.
                    İçinden çıkan numaranın kutusuna
                    gider ve bu zinciri en fazla
                    50 kez takip eder.
                </p>

                <p>
                    Bu yöntem kutulardaki
                    permütasyon döngülerinden
                    yararlanır. Hiçbir döngü
                    50'den uzun değilse
                    bütün mahkûmlar başarılı olur.
                </p>

            </div>


            <button
                class="brain-secondary-button"
                onclick="
                    showPrisonerComparison()
                "
            >
                NE KADAR FARK EDİYOR?
            </button>


            ${createBrainNextButton()}

        </div>
    `;
}


function showPrisonerComparison() {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[3]
        )}


        <div class="brain-result">

            <span class="brain-result-label">
                KARŞILAŞTIR
            </span>

            <h3>
                Aynı problem.
                Tamamen farklı sonuç.
            </h3>


            <div class="brain-probability-compare">

                <div>

                    <span>
                        RASTGELE
                    </span>

                    <strong>
                        ~0
                    </strong>

                    <p>
                        Pratikte yok denecek kadar az.
                    </p>

                </div>


                <div>

                    <span>
                        DÖNGÜ STRATEJİSİ
                    </span>

                    <strong>
                        ~%31
                    </strong>

                    <p>
                        Herkes aynı stratejiyi
                        kullanırsa.
                    </p>

                </div>

            </div>


            ${createBrainNextButton()}

        </div>
    `;
}


/* =========================================================
   05 — İKİ ZARF PARADOKSU
========================================================= */

function createEnvelopes() {

    return `

        ${createBrainTop(
            brainExperiments[4]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                DENEY 05
            </span>

            <div class="envelope-visual">

                <div>
                    ✉️
                </div>

                <div>
                    ✉️
                </div>

            </div>

            <h3>
                İki zarftan birini seçtin.
            </h3>

            <p>
                Bir zarfta diğerinin
                tam iki katı para var.
            </p>


            <div class="brain-explanation brain-explanation-small">

                <p>
                    Zarfını açtın ve içinde
                    <strong>1.000 TL</strong>
                    gördün.
                </p>

            </div>


            <h4 class="brain-sub-question">
                Diğer zarfa geçer misin?
            </h4>


            <div class="brain-choice-buttons">

                <button
                    onclick="
                        answerEnvelope('switch')
                    "
                >
                    ZARFI DEĞİŞTİR
                </button>

                <button
                    onclick="
                        answerEnvelope('stay')
                    "
                >
                    BU ZARFTA KAL
                </button>

            </div>

        </div>
    `;
}


function answerEnvelope(answer) {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[4]
        )}


        <div class="brain-result">

            <div class="brain-result-icon">
                ✉️
            </div>

            <span class="brain-result-label">
                PARADOKS BAŞLIYOR
            </span>

            <h3>
                Diğer zarfta
                500 TL veya 2.000 TL olabilir.
            </h3>

            <p>
                İlk bakışta ikisine de %50
                ihtimal verirsen beklenen değer:
            </p>


            <div class="brain-equation">

                (500 × 0,5)
                +
                (2000 × 0,5)

                <strong>
                    = 1.250 TL
                </strong>

            </div>


            <div class="brain-explanation">

                <span>
                    O ZAMAN NEDEN HEP
                    DEĞİŞTİRMİYORUZ?
                </span>

                <strong>
                    Çünkü %50 / %50 varsayımı
                    kendiliğinden verilmiş değildir.
                </strong>

                <p>
                    1.000 TL'yi gördükten sonra
                    diğer zarfın 500 veya 2.000 TL
                    olma olasılıklarını belirlemek
                    için paranın zarflara hangi
                    olasılık dağılımıyla konulduğunu
                    bilmen gerekir.
                </p>

                <p>
                    Paradoks, bilinmeyen bu
                    olasılıkları otomatik olarak
                    eşit kabul ettiğinde ortaya çıkar.
                </p>

            </div>


            ${createBrainNextButton()}

        </div>
    `;
}


/* =========================================================
   06 — BEKLENMEDİK İDAM
========================================================= */

function createExecution() {

    return `

        ${createBrainTop(
            brainExperiments[5]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                DENEY 06
            </span>

            <div class="brain-big-symbol">
                ?
            </div>

            <h3>
                Bir mahkûma şöyle deniyor:
            </h3>


            <div class="execution-quote">

                “Gelecek hafta,
                hafta içindeki bir gün
                idam edileceksin.

                Ama hangi gün olduğunu
                o sabah gelene kadar
                kesin olarak bilemeyeceksin.”

            </div>


            <p>
                Mahkûm düşünmeye başlıyor.
            </p>


            <button
                class="brain-main-button"
                onclick="
                    executionStepTwo()
                "
            >
                MANTIĞINI TAKİP ET
                <span>→</span>
            </button>

        </div>
    `;
}


function executionStepTwo() {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[5]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                ADIM 1
            </span>

            <h3>
                “Cuma olamaz.”
            </h3>

            <p>
                Perşembe akşamına kadar
                idam edilmemiş olursam,
                geriye sadece cuma kalır.
            </p>

            <div class="brain-explanation">

                <strong>
                    O zaman cuma günü
                    artık sürpriz olmaz.
                </strong>

            </div>


            <button
                class="brain-main-button"
                onclick="
                    executionStepThree()
                "
            >
                DEVAM ET
                <span>→</span>
            </button>

        </div>
    `;
}


function executionStepThree() {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[5]
        )}


        <div class="brain-question">

            <span class="brain-question-number">
                ADIM 2
            </span>

            <h3>
                “O zaman perşembe de olamaz.”
            </h3>

            <p>
                Cuma ihtimalini elediğime göre,
                çarşamba akşamına kadar bir şey
                olmazsa geriye perşembe kalır.
            </p>

            <div class="brain-explanation">

                <strong>
                    Böyle devam ederek
                    bütün günleri eleyebilirim.
                </strong>

            </div>


            <button
                class="brain-main-button"
                onclick="
                    finishExecution()
                "
            >
                VE SONRA...
                <span>→</span>
            </button>

        </div>
    `;
}


function finishExecution() {

    const area =
        document.getElementById(
            "brainGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createBrainTop(
            brainExperiments[5]
        )}


        <div class="brain-result">

            <div class="brain-result-icon">
                🤯
            </div>

            <span class="brain-result-label">
                PARADOKS
            </span>

            <h3>
                Mahkûm hiçbir gün
                idam edilemeyeceğine
                ikna oluyor.
            </h3>

            <p>
                Sonra örneğin çarşamba
                sabahı gardiyan geliyor.
            </p>


            <div class="brain-explanation">

                <span>
                    VE GERÇEKTEN ŞAŞIRIYOR.
                </span>

                <strong>
                    Kendi mantığı,
                    olayın yeniden
                    “beklenmedik” olmasını sağladı.
                </strong>

                <p>
                    Paradoksun merkezinde
                    “beklenmedik” ve “bilmek”
                    kelimelerinin tam olarak
                    ne anlama geldiği vardır.
                    Farklı biçimsel yorumlar,
                    farklı sonuçlara götürebilir.
                </p>

            </div>


            <button
                class="brain-secondary-button"
                onclick="
                    openBrainExperiment(5)
                "
            >
                BAŞTAN OKU
            </button>


            ${createBrainNextButton()}

        </div>
    `;
}

/* =========================================================
   04 — GÖZLERİNE GÜVENİYOR MUSUN?
========================================================= */

const illusionExperiments = [

    {
        id: "mullerLyer",
        number: "01",
        icon: "↔️",
        type: "UZUNLUK",
        title: "Hangi çizgi daha uzun?",
        description:
            "İki çizgiye bak. Gözlerin birinin daha uzun olduğunu söyleyebilir."
    },

    {
        id: "ebbinghaus",
        number: "02",
        icon: "⭕",
        type: "BOYUT",
        title: "Hangi daire daha büyük?",
        description:
            "Ortadaki iki daireyi karşılaştır. Çevrelerindeki şekilleri unut."
    },

    {
        id: "colorContrast",
        number: "03",
        icon: "◼️",
        type: "RENK",
        title: "Hangisi daha açık?",
        description:
            "Aynı renk, farklı çevrelerde tamamen farklı görünebilir."
    },

    {
        id: "motion",
        number: "04",
        icon: "🌀",
        type: "HAREKET",
        title: "Gerçekten hareket ediyor mu?",
        description:
            "Gözlerini desenin üzerinde gezdir. Sonra kararını ver."
    },

    {
        id: "blindSpot",
        number: "05",
        icon: "👁️",
        type: "KÖR NOKTA",
        title: "Görüşünden bir şeyi sil",
        description:
            "Ekrandaki noktayı gözünün önünde gerçekten yok edeceğiz."
    },

    {
        id: "changeBlindness",
        number: "06",
        icon: "⚡",
        type: "DİKKAT",
        title: "Değişikliği yakalayabilir misin?",
        description:
            "İki görüntü arasında küçük bir şey değişecek. Bulabilecek misin?"
    }

];


let currentIllusionIndex = 0;

let changeBlindnessTimer = null;
let changeBlindnessRound = 0;
let changeBlindnessAnswer = null;
let changeBlindnessLocked = false;


/* =========================================================
   ANA EKRAN
========================================================= */

function createIllusionExperience() {

    return `

        <div class="illusion-experience">

            <div class="illusion-header">

                <span class="illusion-section-label">
                    04 — GÖZLERİNE GÜVENİYOR MUSUN?
                </span>

                <h2>
                    Gördüğün şey gerçekten orada mı?
                </h2>

                <p>
                    Gözlerin görüntüyü toplar.
                    Ama gördüğün şeyi beynin oluşturur.
                </p>

            </div>


            <div
                id="illusionGameArea"
                class="illusion-game-area"
            >

                ${createIllusionMenu()}

            </div>

        </div>
    `;
}


/* =========================================================
   DENEY MENÜSÜ
========================================================= */

function createIllusionMenu() {

    return `

        <div class="illusion-menu">

            ${illusionExperiments.map(
                (experiment, index) => `

                    <button
                        class="illusion-menu-card"
                        onclick="openIllusionExperiment(${index})"
                    >

                        <div class="illusion-menu-number">
                            ${experiment.number}
                        </div>

                        <div class="illusion-menu-icon">
                            ${experiment.icon}
                        </div>

                        <div class="illusion-menu-content">

                            <span>
                                ${experiment.type}
                            </span>

                            <h3>
                                ${experiment.title}
                            </h3>

                            <p>
                                ${experiment.description}
                            </p>

                        </div>

                        <div class="illusion-menu-arrow">
                            →
                        </div>

                    </button>

                `
            ).join("")}

        </div>
    `;
}


/* =========================================================
   DENEY AÇ
========================================================= */

function openIllusionExperiment(index) {

    currentIllusionIndex = index;

    clearInterval(changeBlindnessTimer);

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    if (index === 0) {
        area.innerHTML =
            createMullerLyer();
        return;
    }


    if (index === 1) {
        area.innerHTML =
            createEbbinghaus();
        return;
    }


    if (index === 2) {
        area.innerHTML =
            createColorContrast();
        return;
    }


    if (index === 3) {
        area.innerHTML =
            createMotionIllusion();
        return;
    }


    if (index === 4) {
        area.innerHTML =
            createBlindSpot();
        return;
    }


    if (index === 5) {
        area.innerHTML =
            createChangeBlindness();
        return;
    }
}


/* =========================================================
   ORTAK ÜST ALAN
========================================================= */

function createIllusionTop(experiment) {

    return `

        <div class="illusion-experiment-top">

            <button
                class="illusion-back-button"
                onclick="backToIllusionMenu()"
            >
                ← TÜM DENEYLER
            </button>


            <div class="illusion-experiment-badge">

                <span>
                    ${experiment.icon}
                </span>

                ${experiment.type}

            </div>

        </div>

    `;
}


function backToIllusionMenu() {

    clearInterval(changeBlindnessTimer);

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }

    area.innerHTML =
        createIllusionMenu();
}


/* =========================================================
   SONRAKİ DENEY
========================================================= */

function nextIllusionExperiment() {

    currentIllusionIndex++;

    if (
        currentIllusionIndex >=
        illusionExperiments.length
    ) {
        currentIllusionIndex = 0;
    }

    openIllusionExperiment(
        currentIllusionIndex
    );
}


function createIllusionNextButton() {

    return `

        <button
            class="illusion-next-button"
            onclick="nextIllusionExperiment()"
        >
            GÖZLERİMİ BİR DAHA KANDIR
            <span>→</span>
        </button>

    `;
}


/* =========================================================
   01 — MÜLLER-LYER
========================================================= */

function createMullerLyer() {

    return `

        ${createIllusionTop(
            illusionExperiments[0]
        )}


        <div class="illusion-question">

            <span class="illusion-question-number">
                DENEY 01
            </span>

            <h3>
                Hangi yatay çizgi daha uzun?
            </h3>

            <p>
                Ok uçlarını değil,
                ortadaki yatay çizgileri karşılaştır.
            </p>


            <div class="muller-stage">

                <div class="muller-row">

                    <span class="muller-label">
                        A
                    </span>

                    <div class="muller-shape">

                        <span class="muller-wing wing-a-left">
                        </span>

                        <span class="muller-line">
                        </span>

                        <span class="muller-wing wing-a-right">
                        </span>

                    </div>

                </div>


                <div class="muller-row">

                    <span class="muller-label">
                        B
                    </span>

                    <div class="muller-shape">

                        <span class="muller-wing wing-b-left">
                        </span>

                        <span class="muller-line">
                        </span>

                        <span class="muller-wing wing-b-right">
                        </span>

                    </div>

                </div>

            </div>


            <div class="illusion-answer-grid three">

                <button
                    onclick="answerMuller('a')"
                >
                    A DAHA UZUN
                </button>

                <button
                    onclick="answerMuller('same')"
                >
                    AYNI UZUNLUKTA
                </button>

                <button
                    onclick="answerMuller('b')"
                >
                    B DAHA UZUN
                </button>

            </div>

        </div>
    `;
}


function answerMuller(answer) {

    const correct =
        answer === "same";

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createIllusionTop(
            illusionExperiments[0]
        )}


        <div class="illusion-result">

            <div class="illusion-result-icon">
                📏
            </div>

            <span class="illusion-result-label">
                ${
                    correct
                        ? "GÖZLERİNE KANMADIN"
                        : "GÖZLERİN SENİ KANDIRDI"
                }
            </span>

            <h3>
                İki yatay çizgi de aynı uzunlukta.
            </h3>

            <p>
                Farklı görünmelerinin nedeni
                uçlardaki açıların uzunluk
                algını etkilemesi.
            </p>


            <div class="illusion-proof">

                <span>
                    ŞİMDİ UÇLARI KALDIR
                </span>

                <div class="muller-proof-line">
                </div>

                <div class="muller-proof-line">
                </div>

                <strong>
                    İKİSİ DE AYNI
                </strong>

            </div>


            <button
                class="illusion-secondary-button"
                onclick="openIllusionExperiment(0)"
            >
                TEKRAR BAK
            </button>

            ${createIllusionNextButton()}

        </div>
    `;
}


/* =========================================================
   02 — EBBINGHAUS
========================================================= */

function createEbbinghaus() {

    return `

        ${createIllusionTop(
            illusionExperiments[1]
        )}


        <div class="illusion-question">

            <span class="illusion-question-number">
                DENEY 02
            </span>

            <h3>
                Ortadaki hangi daire daha büyük?
            </h3>

            <p>
                Sadece iki mor merkez
                daireye odaklan.
            </p>


            <div class="ebbinghaus-stage">

                <div class="ebbinghaus-group big-surround">

                    <span class="surround s1"></span>
                    <span class="surround s2"></span>
                    <span class="surround s3"></span>
                    <span class="surround s4"></span>
                    <span class="surround s5"></span>
                    <span class="surround s6"></span>

                    <span class="ebbinghaus-center">
                        A
                    </span>

                </div>


                <div class="ebbinghaus-group small-surround">

                    <span class="surround s1"></span>
                    <span class="surround s2"></span>
                    <span class="surround s3"></span>
                    <span class="surround s4"></span>
                    <span class="surround s5"></span>
                    <span class="surround s6"></span>

                    <span class="ebbinghaus-center">
                        B
                    </span>

                </div>

            </div>


            <div class="illusion-answer-grid three">

                <button
                    onclick="answerEbbinghaus('a')"
                >
                    A DAHA BÜYÜK
                </button>

                <button
                    onclick="answerEbbinghaus('same')"
                >
                    İKİSİ AYNI
                </button>

                <button
                    onclick="answerEbbinghaus('b')"
                >
                    B DAHA BÜYÜK
                </button>

            </div>

        </div>
    `;
}


function answerEbbinghaus(answer) {

    const correct =
        answer === "same";

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createIllusionTop(
            illusionExperiments[1]
        )}


        <div class="illusion-result">

            <div class="illusion-result-icon">
                ⭕
            </div>

            <span class="illusion-result-label">
                ${
                    correct
                        ? "DOĞRU"
                        : "ÇEVRESİNE KANDIN"
                }
            </span>

            <h3>
                A ve B tamamen aynı boyutta.
            </h3>

            <p>
                Beynin bir nesnenin boyutunu
                çevresindeki nesnelere göre
                değerlendirebilir.
            </p>


            <div class="ebbinghaus-proof">

                <div>
                    A
                </div>

                <div>
                    B
                </div>

            </div>

            <span class="illusion-proof-note">
                Çevredeki daireler kaldırıldığında
                fark ortadan kayboluyor.
            </span>


            ${createIllusionNextButton()}

        </div>
    `;
}


/* =========================================================
   03 — RENK / KONTRAST
========================================================= */

function createColorContrast() {

    return `

        ${createIllusionTop(
            illusionExperiments[2]
        )}


        <div class="illusion-question">

            <span class="illusion-question-number">
                DENEY 03
            </span>

            <h3>
                Hangi kare daha açık renk?
            </h3>

            <p>
                Ortadaki A ve B karelerine bak.
            </p>


            <div class="contrast-stage">

                <button
                    class="contrast-side contrast-dark"
                    onclick="answerContrast('a')"
                >

                    <span class="contrast-square">
                        A
                    </span>

                </button>


                <button
                    class="contrast-side contrast-light"
                    onclick="answerContrast('b')"
                >

                    <span class="contrast-square">
                        B
                    </span>

                </button>

            </div>


            <button
                class="illusion-same-button"
                onclick="answerContrast('same')"
            >
                İKİ KARE DE AYNI RENK
            </button>

        </div>
    `;
}


function answerContrast(answer) {

    const correct =
        answer === "same";

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createIllusionTop(
            illusionExperiments[2]
        )}


        <div class="illusion-result">

            <div class="illusion-result-icon">
                ◼️
            </div>

            <span class="illusion-result-label">
                ${
                    correct
                        ? "DOĞRU"
                        : "KONTRASTA KANDIN"
                }
            </span>

            <h3>
                A ve B aynı renkte.
            </h3>

            <p>
                Çevredeki parlaklık değiştiğinde
                aynı gri tonu beynin farklı
                parlaklıklardaymış gibi yorumlayabilir.
            </p>


            <div class="contrast-proof">

                <span>
                    A
                </span>

                <div></div>

                <span>
                    B
                </span>

            </div>

            <small class="illusion-proof-note">
                Ortadaki şerit iki karenin
                rengini doğrudan birbirine bağlıyor.
            </small>


            ${createIllusionNextButton()}

        </div>
    `;
}


/* =========================================================
   04 — HAREKET İLLÜZYONU
========================================================= */

function createMotionIllusion() {

    return `

        ${createIllusionTop(
            illusionExperiments[3]
        )}


        <div class="illusion-question">

            <span class="illusion-question-number">
                DENEY 04
            </span>

            <h3>
                Desen hareket ediyor mu?
            </h3>

            <p>
                Tek bir noktaya kilitlenmek yerine
                gözlerini desenin üzerinde gezdir.
            </p>


            <div class="motion-stage">

                ${Array.from(
                    { length: 25 },
                    (_, index) => `

                        <div
                            class="motion-cell motion-cell-${
                                (index % 4) + 1
                            }"
                        >
                            <span></span>
                        </div>

                    `
                ).join("")}

            </div>


            <div class="illusion-answer-grid">

                <button
                    onclick="answerMotion('moving')"
                >
                    HAREKET EDİYOR
                </button>

                <button
                    onclick="answerMotion('still')"
                >
                    TAMAMEN SABİT
                </button>

            </div>

        </div>
    `;
}


function answerMotion(answer) {

    const correct =
        answer === "still";

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createIllusionTop(
            illusionExperiments[3]
        )}


        <div class="illusion-result">

            <div class="illusion-result-icon">
                🌀
            </div>

            <span class="illusion-result-label">
                ${
                    correct
                        ? "DOĞRU"
                        : "HİÇBİR ŞEY HAREKET ETMİYORDU"
                }
            </span>

            <h3>
                Desenin tamamı sabit.
            </h3>

            <p>
                Hareket hissi görüntünün kendisinden
                değil; yüksek kontrastlı desenler,
                küçük göz hareketleri ve görsel
                işlemenin birleşiminden doğabilir.
            </p>


  <div class="illusion-proof">

    <span>
        PEKİ NEDEN HAREKET ETTİ?
    </span>

    <strong>
        Hareketi desen değil,
        beynin oluşturdu.
    </strong>

    <p>
        Gözlerin sürekli çok küçük istemsiz
        hareketler yapar. Yüksek kontrastlı
        renk ve parlaklık geçişleriyle
        birleştiğinde beynin sabit bölgeleri
        hareket ediyormuş gibi algılayabilir.
    </p>

</div>


            ${createIllusionNextButton()}

        </div>
    `;
}


/* =========================================================
   05 — KÖR NOKTA
========================================================= */

function createBlindSpot() {

    return `

        ${createIllusionTop(
            illusionExperiments[4]
        )}


        <div class="illusion-question blind-spot-question">

            <span class="illusion-question-number">
                DENEY 05
            </span>

            <h3>
                Sağ gözünün kör noktasını bul.
            </h3>

            <p>
                Bu deney masaüstünde daha rahat çalışır.
            </p>


            <div class="blind-instructions">

                <div>
                    <span>1</span>
                    Sol gözünü kapat.
                </div>

                <div>
                    <span>2</span>
                    Sağ gözünle sadece + işaretine bak.
                </div>

                <div>
                    <span>3</span>
                    Başını ekrana yaklaştırıp
                    yavaşça uzaklaştır.
                </div>

            </div>


            <div class="blind-spot-stage">

                <div class="blind-cross">
                    +
                </div>

                <div class="blind-dot">
                    ●
                </div>

            </div>


            <p class="blind-warning">
                + işaretinden gözünü ayırma.
                Belirli bir mesafede sağdaki
                nokta kaybolabilir.
            </p>


            <div class="illusion-answer-grid">

                <button
                    onclick="answerBlindSpot(true)"
                >
                    NOKTA KAYBOLDU
                </button>

                <button
                    onclick="answerBlindSpot(false)"
                >
                    HÂLÂ GÖRÜYORUM
                </button>

            </div>

        </div>
    `;
}


function answerBlindSpot(disappeared) {

    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createIllusionTop(
            illusionExperiments[4]
        )}


        <div class="illusion-result">

            <div class="illusion-result-icon">
                👁️
            </div>

            <span class="illusion-result-label">
                ${
                    disappeared
                        ? "KÖR NOKTANI BULDUN"
                        : "MESAFEYİ DEĞİŞTİR"
                }
            </span>

            <h3>
                Gözünde gerçekten göremediğin
                küçük bir bölge var.
            </h3>

            <p>
                Optik sinirin retinadan çıktığı
                bölgede ışığı algılayan
                fotoreseptörler bulunmaz.
            </p>


            <div class="illusion-proof">

                <span>
                    PEKİ NEDEN NORMALDE
                    SİYAH BİR DELİK GÖRMÜYORSUN?
                </span>

                <strong>
                    Beynin eksik alanı
                    çevredeki görüntüden tamamlar.
                </strong>

            </div>


            ${
                !disappeared
                    ? `
                        <button
                            class="illusion-secondary-button"
                            onclick="openIllusionExperiment(4)"
                        >
                            TEKRAR DENE
                        </button>
                    `
                    : ""
            }


            ${createIllusionNextButton()}

        </div>
    `;
}


/* =========================================================
   06 — DEĞİŞİM KÖRLÜĞÜ
========================================================= */

function createChangeBlindness() {

    changeBlindnessRound = 0;
    changeBlindnessAnswer = null;
    changeBlindnessLocked = false;

    clearInterval(
        changeBlindnessTimer
    );


    return `

        ${createIllusionTop(
            illusionExperiments[5]
        )}


        <div class="illusion-question">

            <span class="illusion-question-number">
                DENEY 06
            </span>

            <h3>
                Değişen şeyi bul.
            </h3>

            <p>
                Başlatınca iki görüntü
                sırayla gösterilecek.
            </p>


            <div
                id="changeScene"
                class="change-scene"
            >

                <div class="change-sky">

                    <span class="change-sun">
                        ☀
                    </span>

                    <span class="change-cloud cloud-one">
                        ☁
                    </span>

                    <span class="change-cloud cloud-two">
                        ☁
                    </span>

                </div>


                <div class="change-house">

                    <div class="change-roof">
                    </div>

                    <div class="change-building">

                        <div
                            id="changeWindow"
                            class="change-window"
                        >
                        </div>

                        <div class="change-door">
                        </div>

                    </div>

                </div>


                <div
                    id="changeTree"
                    class="change-tree"
                >
                    ♣
                </div>

            </div>


            <button
                id="changeStartButton"
                class="illusion-main-button"
                onclick="startChangeBlindness()"
            >
                TESTİ BAŞLAT
                <span>→</span>
            </button>


            <div
                id="changeAnswers"
                class="change-answers hidden"
            >

                <p>
                    Sence ne değişiyor?
                </p>

                <div class="illusion-answer-grid">

                    <button
                        onclick="finishChangeBlindness('window')"
                    >
                        PENCERE
                    </button>

                    <button
                        onclick="finishChangeBlindness('tree')"
                    >
                        AĞAÇ
                    </button>

                    <button
                        onclick="finishChangeBlindness('sun')"
                    >
                        GÜNEŞ
                    </button>

                    <button
                        onclick="finishChangeBlindness('nothing')"
                    >
                        HİÇBİR ŞEY
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   DEĞİŞİM TESTİNİ BAŞLAT
========================================================= */

function startChangeBlindness() {

    const scene =
        document.getElementById(
            "changeScene"
        );

    const button =
        document.getElementById(
            "changeStartButton"
        );

    const answers =
        document.getElementById(
            "changeAnswers"
        );


    if (
        !scene ||
        !button ||
        !answers
    ) {
        return;
    }


    clearInterval(
        changeBlindnessTimer
    );


    changeBlindnessLocked = false;
    changeBlindnessRound = 0;

    button.style.display =
        "none";

    answers.classList.remove(
        "hidden"
    );


    changeBlindnessTimer =
        setInterval(
            toggleChangeScene,
            700
        );
}


/* =========================================================
   İKİ GÖRÜNTÜ ARASINDA GEÇ
========================================================= */

function toggleChangeScene() {

    const scene =
        document.getElementById(
            "changeScene"
        );

    const windowElement =
        document.getElementById(
            "changeWindow"
        );


    if (
        !scene ||
        !windowElement
    ) {

        clearInterval(
            changeBlindnessTimer
        );

        return;
    }


    changeBlindnessRound++;


    if (
        changeBlindnessRound % 2 === 0
    ) {

        scene.classList.remove(
            "change-scene-flash"
        );

        windowElement.classList.remove(
            "window-missing"
        );

    } else {

        scene.classList.add(
            "change-scene-flash"
        );

        windowElement.classList.add(
            "window-missing"
        );
    }
}


/* =========================================================
   DEĞİŞİM TESTİ SONUÇ
========================================================= */

function finishChangeBlindness(answer) {

    if (changeBlindnessLocked) {
        return;
    }

    changeBlindnessLocked = true;

    clearInterval(
        changeBlindnessTimer
    );


    const correct =
        answer === "window";


    const area =
        document.getElementById(
            "illusionGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `

        ${createIllusionTop(
            illusionExperiments[5]
        )}


        <div class="illusion-result">

            <div class="illusion-result-icon">
                ⚡
            </div>

            <span class="illusion-result-label">
                ${
                    correct
                        ? "DEĞİŞİKLİĞİ YAKALADIN"
                        : "GÖZÜNÜN ÖNÜNDEYDİ"
                }
            </span>

            <h3>
                Evin penceresi kayboluyordu.
            </h3>

            <p>
                Büyük bir görüntünün küçük
                bir ayrıntısı değiştiğinde,
                özellikle araya kısa bir görsel
                kesinti girdiğinde değişikliği
                fark etmek şaşırtıcı derecede
                zor olabilir.
            </p>


            <div class="change-result-demo">

                <div>
                    <span>
                        ÖNCE
                    </span>

                    <div class="mini-house">
                        <i></i>
                    </div>
                </div>


                <div>
                    <span>
                        SONRA
                    </span>

                    <div class="mini-house no-window">
                        <i></i>
                    </div>
                </div>

            </div>


            <button
                class="illusion-secondary-button"
                onclick="openIllusionExperiment(5)"
            >
                TEKRAR DENE
            </button>


            ${createIllusionNextButton()}

        </div>
    `;
}

/* =========================================================
   05 — SENİ TAHMİN EDECEĞİM
========================================================= */

const predictExperiments = [
    {
        id: "numberMind",
        number: "01",
        icon: "🔢",
        type: "ZİHİN OKUMA",
        title: "Aklındaki sayıyı bulacağım",
        description:
            "1–31 arasında bir sayı tut. Bana asla söyleme."
    },
    {
        id: "symbolMind",
        number: "02",
        icon: "🔮",
        type: "ELEME",
        title: "Hangi sembolü seçtin?",
        description:
            "Bir sembol seç. Birkaç sorudan sonra hangisi olduğunu söyleyeceğim."
    },
    {
        id: "personality",
        number: "03",
        icon: "🧠",
        type: "PROFİL",
        title: "Kararlarını okuyacağım",
        description:
            "Beş hızlı seçim yap. Sonunda nasıl karar verdiğini tahmin edeceğim."
    },
    {
        id: "boxPrediction",
        number: "04",
        icon: "📦",
        type: "TAHMİN",
        title: "Hangi kutuyu seçeceksin?",
        description:
            "Tahminimi sen seçim yapmadan önce kilitleyeceğim."
    },
    {
        id: "wordInfluence",
        number: "05",
        icon: "💭",
        type: "ÇAĞRIŞIM",
        title: "Sana bir kelime söyleteceğim",
        description:
            "Hızlı düşün. Cevabını değiştirme. Aklına ilk gelen önemli."
    },
    {
        id: "finalPrediction",
        number: "06",
        icon: "👁️",
        type: "DAVRANIŞ",
        title: "Son seçimini tahmin edeceğim",
        description:
            "Önceki seçimlerinden son kararını tahmin etmeye çalışacağım."
    }
];


let currentPredictIndex = 0;


/* =========================================================
   01 — SAYI TAHMİNİ DEĞİŞKENLERİ
========================================================= */

let mindNumberStep = 0;
let mindNumberValue = 0;


/* =========================================================
   02 — SEMBOL TAHMİNİ
========================================================= */

const mindSymbols = [
    "◆", "●", "★", "▲",
    "☾", "✦", "♠", "♥",
    "☀", "☁", "♣", "☯",
    "✚", "◉", "♦", "☂"
];

let symbolStep = 0;
let symbolValue = 0;


/* =========================================================
   03 — PROFİL
========================================================= */

const personalityQuestions = [
    {
        question: "Hangisini seçersin?",
        left: "GECE",
        right: "GÜNDÜZ",
        leftValue: "intuitive",
        rightValue: "structured"
    },
    {
        question: "Şu an bir yere kaçabilecek olsan?",
        left: "ORMAN",
        right: "DENİZ",
        leftValue: "independent",
        rightValue: "social"
    },
    {
        question: "Bir plan bozuldu.",
        left: "YENİ PLAN YAP",
        right: "AKIŞINA BIRAK",
        leftValue: "structured",
        rightValue: "spontaneous"
    },
    {
        question: "İki seçenek var.",
        left: "RİSK AL",
        right: "GARANTİYE GİT",
        leftValue: "risk",
        rightValue: "safe"
    },
    {
        question: "Boş bir akşam.",
        left: "YALNIZ KAL",
        right: "İNSANLARA KARIŞ",
        leftValue: "independent",
        rightValue: "social"
    }
];

let personalityStep = 0;
let personalityScores = {};


/* =========================================================
   04 — KUTU TAHMİNİ
========================================================= */

let boxPredictionLocked = null;
let boxWins = 0;
let boxRounds = 0;


/* =========================================================
   05 — KELİME YÖNLENDİRME
========================================================= */

let wordInfluenceStep = 0;


/* =========================================================
   06 — SON SEÇİM
========================================================= */

const finalPredictionQuestions = [
    {
        question: "Hiç düşünmeden seç.",
        left: "KIRMIZI",
        right: "MAVİ"
    },
    {
        question: "Bir yön seç.",
        left: "SOL",
        right: "SAĞ"
    },
    {
        question: "Bir sayı seç.",
        left: "1",
        right: "2"
    },
    {
        question: "Bir şekil seç.",
        left: "DAİRE",
        right: "ÜÇGEN"
    }
];

let finalPredictionStep = 0;
let finalPredictionChoices = [];
let finalLockedPrediction = null;


/* =========================================================
   ANA EKRAN
========================================================= */

function createPredictExperience() {

    return `
        <div class="predict-experience">

            <div class="predict-header">

                <span class="predict-section-label">
                    05 — SENİ TAHMİN EDECEĞİM
                </span>

                <h2>
                    Aklından geçenleri saklayabilir misin?
                </h2>

                <p>
                    Bazı deneyler matematik kullanır.
                    Bazıları seçimlerini.
                    Bazılarıysa sadece seni izler.
                </p>

            </div>

            <div
                id="predictGameArea"
                class="predict-game-area"
            >
                ${createPredictMenu()}
            </div>

        </div>
    `;
}


/* =========================================================
   ANA MENÜ
========================================================= */

function createPredictMenu() {

    return `
        <div class="predict-menu">

            ${predictExperiments.map(
                (experiment, index) => `

                    <button
                        class="predict-menu-card"
                        onclick="openPredictExperiment(${index})"
                    >

                        <div class="predict-menu-number">
                            ${experiment.number}
                        </div>

                        <div class="predict-menu-icon">
                            ${experiment.icon}
                        </div>

                        <div class="predict-menu-content">

                            <span>
                                ${experiment.type}
                            </span>

                            <h3>
                                ${experiment.title}
                            </h3>

                            <p>
                                ${experiment.description}
                            </p>

                        </div>

                        <div class="predict-menu-arrow">
                            →
                        </div>

                    </button>

                `
            ).join("")}

        </div>
    `;
}


/* =========================================================
   ORTAK ÜST ALAN
========================================================= */

function createPredictTop(experiment) {

    return `
        <div class="predict-experiment-top">

            <button
                class="predict-back-button"
                onclick="backToPredictMenu()"
            >
                ← TÜM DENEYLER
            </button>

            <div class="predict-experiment-badge">

                <span>
                    ${experiment.icon}
                </span>

                ${experiment.type}

            </div>

        </div>
    `;
}


/* =========================================================
   DENEY AÇ
========================================================= */

function openPredictExperiment(index) {

    currentPredictIndex = index;

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    if (index === 0) {
        area.innerHTML =
            createNumberMindIntro();
        return;
    }

    if (index === 1) {
        area.innerHTML =
            createSymbolMindIntro();
        return;
    }

    if (index === 2) {
        area.innerHTML =
            createPersonalityIntro();
        return;
    }

    if (index === 3) {
        area.innerHTML =
            createBoxPrediction();
        return;
    }

    if (index === 4) {
        area.innerHTML =
            createWordInfluenceIntro();
        return;
    }

    if (index === 5) {
        area.innerHTML =
            createFinalPredictionIntro();
    }
}


function backToPredictMenu() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    area.innerHTML =
        createPredictMenu();
}


function nextPredictExperiment() {

    currentPredictIndex++;

    if (
        currentPredictIndex >=
        predictExperiments.length
    ) {
        currentPredictIndex = 0;
    }

    openPredictExperiment(
        currentPredictIndex
    );
}


function createPredictNextButton() {

    return `
        <button
            class="predict-main-button"
            onclick="nextPredictExperiment()"
        >
            SONRAKİ DENEY
            <span>→</span>
        </button>
    `;
}


/* =========================================================
   İLERLEME ÇUBUĞU
========================================================= */

function createPredictProgress(
    current,
    total,
    text = "SENİ ÇÖZÜYORUM"
) {

    const percent =
        Math.round(
            (current / total) * 100
        );

    return `
        <div class="predict-progress">

            <div class="predict-progress-top">

                <span>
                    ${text}
                </span>

                <strong>
                    ${percent}%
                </strong>

            </div>

            <div class="predict-progress-track">

                <div
                    class="predict-progress-fill"
                    style="width:${percent}%"
                ></div>

            </div>

        </div>
    `;
}


/* =========================================================
   01 — AKLINDAKİ SAYI
========================================================= */

function createNumberMindIntro() {

    return `
        ${createPredictTop(
            predictExperiments[0]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                DENEY 01
            </span>

            <div class="predict-big-icon">
                🔢
            </div>

            <h3>
                1 ile 31 arasında
                bir sayı tut.
            </h3>

            <p>
                Sayıyı bana söyleme.
                Bir yere yazma.
                Sadece aklında tut.
            </p>

            <button
                class="predict-main-button"
                onclick="startNumberMind()"
            >
                SAYIYI TUTTUM
                <span>→</span>
            </button>

        </div>
    `;
}


function startNumberMind() {

    mindNumberStep = 0;
    mindNumberValue = 0;

    showNumberMindCard();
}


function getNumberMindCard(step) {

    const bit =
        Math.pow(2, step);

    const numbers = [];

    for (
        let number = 1;
        number <= 31;
        number++
    ) {

        if (
            (number & bit) !== 0
        ) {
            numbers.push(number);
        }
    }

    return numbers;
}


function showNumberMindCard() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    if (mindNumberStep >= 5) {
        finishNumberMind();
        return;
    }

    const numbers =
        getNumberMindCard(
            mindNumberStep
        );

    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[0]
        )}

        <div class="predict-question">

            ${createPredictProgress(
                mindNumberStep + 1,
                5
            )}

            <span class="predict-question-number">
                ${mindNumberStep + 1} / 5
            </span>

            <h3>
                Tuttuğun sayı
                burada var mı?
            </h3>

            <p>
                Dikkatlice bak.
                Sadece EVET veya HAYIR de.
            </p>

            <div class="mind-number-grid">

                ${numbers.map(
                    number => `
                        <span>
                            ${number}
                        </span>
                    `
                ).join("")}

            </div>

            <div class="predict-choice-buttons">

                <button
                    onclick="answerNumberMind(true)"
                >
                    EVET
                </button>

                <button
                    onclick="answerNumberMind(false)"
                >
                    HAYIR
                </button>

            </div>

        </div>
    `;
}


function answerNumberMind(yes) {

    if (yes) {

        mindNumberValue +=
            Math.pow(
                2,
                mindNumberStep
            );
    }

    mindNumberStep++;

    showNumberMindCard();
}


function finishNumberMind() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[0]
        )}

        <div class="predict-result">

            <div class="predict-result-icon">
                🎯
            </div>

            <span class="predict-result-label">
                AKLINI OKUDUM
            </span>

            <h3>
                Tuttuğun sayı...
            </h3>

            <div class="mind-number-reveal">
                ${mindNumberValue}
            </div>

            <p>
                Bana sayıyı hiç söylemedin.
                Ama verdiğin beş cevap,
                sayıyı tek bir ihtimale indirdi.
            </p>

            <div class="predict-explanation">

                <span>
                    NASIL BİLDİM?
                </span>

                <strong>
                    Her kart sayının farklı
                    bir ikili basamağını temsil ediyor.
                </strong>

                <p>
                    EVET dediğin kartların değerleri
                    birleştiğinde tuttuğun sayı ortaya çıkıyor.
                </p>

            </div>

            <button
                class="predict-secondary-button"
                onclick="openPredictExperiment(0)"
            >
                BAŞKA SAYIYLA DENE
            </button>

            ${createPredictNextButton()}

        </div>
    `;
}


/* =========================================================
   02 — SEMBOLÜ BUL
========================================================= */

function createSymbolMindIntro() {

    return `
        ${createPredictTop(
            predictExperiments[1]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                DENEY 02
            </span>

            <div class="predict-big-icon">
                🔮
            </div>

            <h3>
                Bir sembol seç.
            </h3>

            <p>
                Aşağıdaki sembollerden yalnızca
                bir tanesini aklında tut.
            </p>

            <div class="symbol-preview-grid">

                ${mindSymbols.map(
                    symbol => `
                        <span>
                            ${symbol}
                        </span>
                    `
                ).join("")}

            </div>

            <button
                class="predict-main-button"
                onclick="startSymbolMind()"
            >
                SEMBOLÜ SEÇTİM
                <span>→</span>
            </button>

        </div>
    `;
}


function startSymbolMind() {

    symbolStep = 0;
    symbolValue = 0;

    showSymbolMindCard();
}


function getSymbolCard(step) {

    const bit =
        Math.pow(2, step);

    const symbols = [];

    for (
        let index = 0;
        index < mindSymbols.length;
        index++
    ) {

        if (
            (index & bit) !== 0
        ) {
            symbols.push(
                mindSymbols[index]
            );
        }
    }

    return symbols;
}


function showSymbolMindCard() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    if (symbolStep >= 4) {
        finishSymbolMind();
        return;
    }

    const symbols =
        getSymbolCard(symbolStep);

    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[1]
        )}

        <div class="predict-question">

            ${createPredictProgress(
                symbolStep + 1,
                4
            )}

            <span class="predict-question-number">
                ${symbolStep + 1} / 4
            </span>

            <h3>
                Sembolün bu grubun
                içinde mi?
            </h3>

            <div class="symbol-question-grid">

                ${symbols.map(
                    symbol => `
                        <span>
                            ${symbol}
                        </span>
                    `
                ).join("")}

            </div>

            <div class="predict-choice-buttons">

                <button
                    onclick="answerSymbolMind(true)"
                >
                    EVET
                </button>

                <button
                    onclick="answerSymbolMind(false)"
                >
                    HAYIR
                </button>

            </div>

        </div>
    `;
}


function answerSymbolMind(yes) {

    if (yes) {

        symbolValue +=
            Math.pow(
                2,
                symbolStep
            );
    }

    symbolStep++;

    showSymbolMindCard();
}


function finishSymbolMind() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    const symbol =
        mindSymbols[symbolValue];

    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[1]
        )}

        <div class="predict-result">

            <div class="predict-result-icon">
                🔮
            </div>

            <span class="predict-result-label">
                SEÇİMİNİ BULDUM
            </span>

            <h3>
                Aklındaki sembol:
            </h3>

            <div class="symbol-reveal">
                ${symbol || "?"}
            </div>

            <p>
                Her cevabın olasılıkların
                yarısını eledi.
            </p>

            <div class="predict-explanation">

                <span>
                    ZİHİN OKUMA MI?
                </span>

                <strong>
                    Hayır. Bilgi teorisi.
                </strong>

                <p>
                    Dört EVET/HAYIR sorusu,
                    16 farklı seçeneği ayırt etmek
                    için yeterli bilgi taşıyabilir.
                </p>

            </div>

            ${createPredictNextButton()}

        </div>
    `;
}


/* =========================================================
   03 — KARAR PROFİLİ
========================================================= */

function createPersonalityIntro() {

    return `
        ${createPredictTop(
            predictExperiments[2]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                DENEY 03
            </span>

            <div class="predict-big-icon">
                🧠
            </div>

            <h3>
                Fazla düşünme.
            </h3>

            <p>
                Sana beş seçim vereceğim.
                Her seferinde ilk içinden
                gelen seçeneğe bas.
            </p>

            <button
                class="predict-main-button"
                onclick="startPersonalityPrediction()"
            >
                BENİ ÇÖZ
                <span>→</span>
            </button>

        </div>
    `;
}


function startPersonalityPrediction() {

    personalityStep = 0;

    personalityScores = {
        intuitive: 0,
        structured: 0,
        independent: 0,
        social: 0,
        spontaneous: 0,
        risk: 0,
        safe: 0
    };

    showPersonalityQuestion();
}


function showPersonalityQuestion() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    if (
        personalityStep >=
        personalityQuestions.length
    ) {
        finishPersonalityPrediction();
        return;
    }

    const item =
        personalityQuestions[
            personalityStep
        ];

    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[2]
        )}

        <div class="predict-question">

            ${createPredictProgress(
                personalityStep + 1,
                personalityQuestions.length
            )}

            <span class="predict-question-number">
                ${personalityStep + 1}
                /
                ${personalityQuestions.length}
            </span>

            <h3>
                ${item.question}
            </h3>

            <p>
                İlk aklına geleni seç.
            </p>

            <div class="personality-choice">

                <button
                    onclick="answerPersonality('left')"
                >
                    ${item.left}
                </button>

                <div>
                    VEYA
                </div>

                <button
                    onclick="answerPersonality('right')"
                >
                    ${item.right}
                </button>

            </div>

        </div>
    `;
}


function answerPersonality(side) {

    const item =
        personalityQuestions[
            personalityStep
        ];

    if (!item) {
        return;
    }

    const value =
        side === "left"
            ? item.leftValue
            : item.rightValue;

    personalityScores[value] =
        (personalityScores[value] || 0) + 1;

    personalityStep++;

    showPersonalityQuestion();
}


function finishPersonalityPrediction() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    let title = "";
    let description = "";

    const structure =
        personalityScores.structured || 0;

    const spontaneous =
        personalityScores.spontaneous || 0;

    const independent =
        personalityScores.independent || 0;

    const social =
        personalityScores.social || 0;

    const risk =
        personalityScores.risk || 0;

    const safe =
        personalityScores.safe || 0;


    if (
        structure > spontaneous &&
        independent >= social
    ) {

        title =
            "Kontrolü kaybetmekten hoşlanmıyorsun.";

        description =
            "Karar vermeden önce seçeneklerini tartma eğilimin var. Kendi alanını koruyor ve belirsizliği azaltmayı tercih ediyorsun.";

    } else if (
        spontaneous >= structure &&
        risk > safe
    ) {

        title =
            "Karar verirken hız seni korkutmuyor.";

        description =
            "Belirsizlik seni tamamen durdurmuyor. Plan değiştiğinde yeni duruma uyum sağlama ve risk alma eğilimin daha yüksek çıktı.";

    } else if (
        social > independent
    ) {

        title =
            "Çevrendeki insanlar kararlarını etkiliyor.";

        description =
            "Deneyde sosyal seçeneklere daha sık yöneldin. Bir şeyi yaşarken paylaşma ve çevrenden geri bildirim alma eğilimin öne çıktı.";

    } else if (
        independent > social
    ) {

        title =
            "Kendi karar alanını seviyorsun.";

        description =
            "Seçimlerinde bağımsız seçenekler daha sık öne çıktı. Düşüncelerini toparlamak için kendi alanına ihtiyaç duyma eğilimin olabilir.";

    } else {

        title =
            "Seni tek bir kutuya koymak zor.";

        description =
            "Seçimlerin belirgin biçimde tek bir tarafa yığılmadı. Duruma göre farklı karar stratejileri kullanıyorsun.";
    }


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[2]
        )}

        <div class="predict-result">

            <div class="predict-result-icon">
                🧠
            </div>

            <span class="predict-result-label">
                SEÇİMLERİNİ OKUDUM
            </span>

            <h3>
                ${title}
            </h3>

            <p>
                ${description}
            </p>

            <div class="personality-stats">

                <div>
                    <span>
                        PLAN
                    </span>
                    <strong>
                        ${structure}
                    </strong>
                </div>

                <div>
                    <span>
                        SOSYAL
                    </span>
                    <strong>
                        ${social}
                    </strong>
                </div>

                <div>
                    <span>
                        BAĞIMSIZ
                    </span>
                    <strong>
                        ${independent}
                    </strong>
                </div>

                <div>
                    <span>
                        RİSK
                    </span>
                    <strong>
                        ${risk}
                    </strong>
                </div>

            </div>

            <small class="predict-disclaimer">
                Bu eğlencelik bir seçim deneyidir;
                bilimsel kişilik testi değildir.
            </small>

            ${createPredictNextButton()}

        </div>
    `;
}


/* =========================================================
   04 — KUTU TAHMİNİ
========================================================= */

function createBoxPrediction() {

    lockNewBoxPrediction();

    return `
        ${createPredictTop(
            predictExperiments[3]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                DENEY 04
            </span>

            <div class="predict-big-icon">
                📦
            </div>

            <h3>
                Bir kutu seç.
            </h3>

            <p>
                Tahminimi şu anda kilitledim.
                Sen seçim yaptıktan sonra açacağım.
            </p>

            <div class="locked-prediction">

                <span>
                    TAHMİN KİLİTLENDİ
                </span>

                <strong>
                    •••
                </strong>

            </div>

            <div class="box-prediction-grid">

                ${["A", "B", "C", "D"].map(
                    box => `
                        <button
                            onclick="choosePredictionBox('${box}')"
                        >
                            <span>
                                KUTU
                            </span>

                            <strong>
                                ${box}
                            </strong>
                        </button>
                    `
                ).join("")}

            </div>

            <div class="box-score">
                BİLDİĞİM:
                <strong>${boxWins}</strong>
                /
                ${boxRounds}
            </div>

        </div>
    `;
}


function lockNewBoxPrediction() {

    const boxes =
        ["A", "B", "C", "D"];

    boxPredictionLocked =
        boxes[
            Math.floor(
                Math.random() *
                boxes.length
            )
        ];
}


function choosePredictionBox(choice) {

    boxRounds++;

    const won =
        choice ===
        boxPredictionLocked;

    if (won) {
        boxWins++;
    }

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }

    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[3]
        )}

        <div class="predict-result">

            <div class="predict-result-icon">
                ${won ? "🎯" : "📦"}
            </div>

            <span class="predict-result-label">
                ${
                    won
                        ? "SENİ YAKALADIM"
                        : "BU SEFER KAÇTIN"
                }
            </span>

            <h3>
                Sen ${choice} seçtin.
            </h3>

            <p>
                Benim önceden kilitlediğim
                tahmin ise:
            </p>

            <div class="box-prediction-reveal">
                ${boxPredictionLocked}
            </div>

            <div class="box-score large">
                TOPLAM:
                <strong>${boxWins}</strong>
                /
                ${boxRounds}
            </div>

            <div class="predict-explanation">

                <span>
                    ÖNEMLİ
                </span>

                <strong>
                    Tahmin seçiminden önce oluşturuldu.
                </strong>

                <p>
                    Seçiminden sonra sonucu değiştirmiyorum.
                    Bu yüzden bazen bileceğim,
                    bazen bilemeyeceğim.
                </p>

            </div>

            <button
                class="predict-secondary-button"
                onclick="openPredictExperiment(3)"
            >
                YENİ TUR
            </button>

            ${createPredictNextButton()}

        </div>
    `;
}


/* =========================================================
   05 — KELİME YÖNLENDİRME
========================================================= */

function createWordInfluenceIntro() {

    wordInfluenceStep = 0;

    return `
        ${createPredictTop(
            predictExperiments[4]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                DENEY 05
            </span>

            <div class="predict-big-icon">
                💭
            </div>

            <h3>
                Fazla düşünürsen bozulur.
            </h3>

            <p>
                Sana birkaç basit şey
                soracağım. Her seferinde
                aklına ilk gelen cevabı düşün.
                Yazmana gerek yok.
            </p>

            <button
                class="predict-main-button"
                onclick="startWordInfluence()"
            >
                HAZIRIM
                <span>→</span>
            </button>

        </div>
    `;
}


function startWordInfluence() {

    wordInfluenceStep = 0;

    showWordInfluenceStep();
}


function showWordInfluenceStep() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }


    const steps = [
        {
            icon: "🎨",
            title:
                "Hızlıca bir renk düşün.",
            text:
                "İlk aklına gelen. Değiştirme."
        },
        {
            icon: "🔨",
            title:
                "Şimdi bir alet düşün.",
            text:
                "Evde görebileceğin sıradan bir alet."
        },
        {
            icon: "🥕",
            title:
                "Şimdi bir sebze düşün.",
            text:
                "Fazla düşünme. İlk geleni tut."
        }
    ];


    if (
        wordInfluenceStep >=
        steps.length
    ) {

        showWordInfluenceGuess();
        return;
    }


    const item =
        steps[wordInfluenceStep];


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[4]
        )}

        <div class="predict-question">

            ${createPredictProgress(
                wordInfluenceStep + 1,
                steps.length,
                "ÇAĞRIŞIM OLUŞUYOR"
            )}

            <div class="word-influence-icon">
                ${item.icon}
            </div>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.text}
            </p>

            <button
                class="predict-main-button"
                onclick="nextWordInfluenceStep()"
            >
                AKLIMDA
                <span>→</span>
            </button>

        </div>
    `;
}


function nextWordInfluenceStep() {

    wordInfluenceStep++;

    showWordInfluenceStep();
}


function showWordInfluenceGuess() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[4]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                TAHMİNİM HAZIR
            </span>

            <h3>
                Son düşündüğün sebze...
            </h3>

            <div class="word-guess-reveal">
                HAVUÇ
            </div>

            <p>
                Doğru mu?
            </p>

            <div class="predict-choice-buttons">

                <button
                    onclick="finishWordInfluence(true)"
                >
                    EVET
                </button>

                <button
                    onclick="finishWordInfluence(false)"
                >
                    HAYIR
                </button>

            </div>

        </div>
    `;
}


function finishWordInfluence(correct) {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[4]
        )}

        <div class="predict-result">

            <div class="predict-result-icon">
                ${correct ? "🎯" : "🧠"}
            </div>

            <span class="predict-result-label">
                ${
                    correct
                        ? "AKLINA GİRDİM"
                        : "BEKLEDİĞİM YOLDAN GİTMEDİN"
                }
            </span>

            <h3>
                ${
                    correct
                        ? "Havuç düşündün."
                        : "Bu sefer tahminim tutmadı."
                }
            </h3>

            <p>
                ${
                    correct
                        ? "Hızlı çağrışım sorularında bazı cevaplar diğerlerinden daha kolay akla gelebilir."
                        : "Bu deney kesin sonuç vermez. İnsanların çağrışımları kişiden kişiye değişir."
                }
            </p>

            <div class="predict-explanation">

                <span>
                    BURADA NE OLDU?
                </span>

                <strong>
                    Bu bir matematik hilesi değil.
                </strong>

                <p>
                    Amaç hızlı düşünürken bazı
                    cevapların ne kadar erişilebilir
                    olduğunu denemekti.
                    Sonucu doğruymuş gibi zorlamıyoruz.
                </p>

            </div>

            ${createPredictNextButton()}

        </div>
    `;
}


/* =========================================================
   06 — SON SEÇİMİNİ TAHMİN ET
========================================================= */

function createFinalPredictionIntro() {

    return `
        ${createPredictTop(
            predictExperiments[5]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                DENEY 06
            </span>

            <div class="predict-big-icon">
                👁️
            </div>

            <h3>
                Son kararını senden önce vereceğim.
            </h3>

            <p>
                Önce dört hızlı seçim yapacaksın.
                Sonra davranışına göre son seçimini
                tahmin edeceğim.
            </p>

            <button
                class="predict-main-button"
                onclick="startFinalPrediction()"
            >
                BAŞLAT
                <span>→</span>
            </button>

        </div>
    `;
}


function startFinalPrediction() {

    finalPredictionStep = 0;
    finalPredictionChoices = [];
    finalLockedPrediction = null;

    showFinalPredictionQuestion();
}


function showFinalPredictionQuestion() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }


    if (
        finalPredictionStep >=
        finalPredictionQuestions.length
    ) {

        lockFinalPrediction();
        showFinalDecision();

        return;
    }


    const item =
        finalPredictionQuestions[
            finalPredictionStep
        ];


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[5]
        )}

        <div class="predict-question">

            ${createPredictProgress(
                finalPredictionStep + 1,
                finalPredictionQuestions.length,
                "DAVRANIŞINI OKUYORUM"
            )}

            <span class="predict-question-number">
                HIZLI SEÇİM
                ${finalPredictionStep + 1}
            </span>

            <h3>
                ${item.question}
            </h3>

            <div class="final-fast-choice">

                <button
                    onclick="answerFinalPrediction('left')"
                >
                    ${item.left}
                </button>

                <button
                    onclick="answerFinalPrediction('right')"
                >
                    ${item.right}
                </button>

            </div>

        </div>
    `;
}


function answerFinalPrediction(side) {

    finalPredictionChoices.push(
        side
    );

    finalPredictionStep++;

    showFinalPredictionQuestion();
}


function lockFinalPrediction() {

    const leftCount =
        finalPredictionChoices.filter(
            choice =>
                choice === "left"
        ).length;

    const rightCount =
        finalPredictionChoices.length -
        leftCount;


    /*
        Basit davranışsal tahmin:
        Kullanıcı önceki seçimlerde
        bir tarafa fazla yığılmışsa,
        finalde dengelemek isteyebileceğini
        tahmin ediyoruz.
    */

    if (leftCount > rightCount) {

        finalLockedPrediction =
            "right";

    } else if (
        rightCount > leftCount
    ) {

        finalLockedPrediction =
            "left";

    } else {

        /*
            Eşitse son seçimin tersini tahmin et.
        */

        finalLockedPrediction =
            finalPredictionChoices[
                finalPredictionChoices.length - 1
            ] === "left"
                ? "right"
                : "left";
    }
}


function showFinalDecision() {

    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[5]
        )}

        <div class="predict-question">

            <span class="predict-question-number">
                TAHMİN KİLİTLENDİ
            </span>

            <h3>
                Son bir seçim.
            </h3>

            <p>
                Tahminim hazır.
                Artık değiştiremiyorum.
            </p>

            <div class="final-lock-box">

                <span>
                    BENİM TAHMİNİM
                </span>

                <strong>
                    🔒
                </strong>

            </div>

            <div class="final-fast-choice">

                <button
                    onclick="finishFinalPrediction('left')"
                >
                    SOL
                </button>

                <button
                    onclick="finishFinalPrediction('right')"
                >
                    SAĞ
                </button>

            </div>

        </div>
    `;
}


function finishFinalPrediction(choice) {

    const correct =
        choice ===
        finalLockedPrediction;


    const predictionText =
        finalLockedPrediction === "left"
            ? "SOL"
            : "SAĞ";


    const choiceText =
        choice === "left"
            ? "SOL"
            : "SAĞ";


    const area =
        document.getElementById(
            "predictGameArea"
        );

    if (!area) {
        return;
    }


    area.innerHTML = `
        ${createPredictTop(
            predictExperiments[5]
        )}

        <div class="predict-result">

            <div class="predict-result-icon">
                ${correct ? "👁️" : "🧠"}
            </div>

            <span class="predict-result-label">
                ${
                    correct
                        ? "SON KARARINI BİLDİM"
                        : "BU SEFER TERS KÖŞE OLDUM"
                }
            </span>

            <h3>
                Sen ${choiceText} seçtin.
            </h3>

            <div class="final-result-compare">

                <div>
                    <span>
                        SEN
                    </span>

                    <strong>
                        ${choiceText}
                    </strong>
                </div>

                <div>
                    <span>
                        TAHMİNİM
                    </span>

                    <strong>
                        ${predictionText}
                    </strong>
                </div>

            </div>

            <p>
                Tahmin son seçim ekranı
                açılmadan önce oluşturuldu.
            </p>

            <div class="predict-explanation">

                <span>
                    NASIL TAHMİN ETTİM?
                </span>

                <strong>
                    Önceki seçimlerinin yön dağılımına baktım.
                </strong>

                <p>
                    Bir tarafa fazla yığılmışsan,
                    son seçimde diğer tarafa geçebileceğini
                    varsaydım. Bu kesin bir yöntem değil;
                    gerçekten bir tahmin.
                </p>

            </div>

            <button
                class="predict-secondary-button"
                onclick="openPredictExperiment(5)"
            >
                TEKRAR DENE
            </button>

            <button
                class="predict-main-button"
                onclick="backToPredictMenu()"
            >
                TÜM DENEYLERE DÖN
                <span>→</span>
            </button>

        </div>
    `;
}

/* =========================================================
   GLOBAL SITE SETTINGS
========================================================= */

const DEFAULT_SITE_SETTINGS = {
    fontSize: "normal",
    density: "normal",
    animations: true,
    theme: "purple",
    buttonSounds: false,
    resultSounds: false,
    radioVolume: 55,
    radioStation: "fenomen"
};

let siteSettings = {
    ...DEFAULT_SITE_SETTINGS
};


/* =========================================================
   RADYO İSTASYONLARI
========================================================= */

/*
   Stream adreslerini ayrı tutuyoruz.
   Bir istasyon ileride adres değiştirirse
   yalnızca buradaki URL değiştirilecek.
*/

const siteRadioStations = [

    {
        id: "fenomen",
        name: "Radyo Fenomen",
        genre: "Hit • Pop • Dance",
        stream: "https://listen.radyofenomen.com/fenomen/128/icecast.audio"
    },

    {
        id: "fenomenturk",
        name: "Fenomen Türk",
        genre: "Türkçe Pop",
        stream: "https://listen.radyofenomen.com/fenomenturk/128/icecast.audio"
    },

    {
        id: "kralpop",
        name: "Kral Pop",
        genre: "Türkçe Pop",
        stream: ""
    },

    {
        id: "kralfm",
        name: "Kral FM",
        genre: "Türkçe Müzik",
        stream: ""
    }

];

let currentRadioIndex = 0;
let radioIsPlaying = false;


/* =========================================================
   SAYFA HAZIR OLDUĞUNDA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadSiteSettings();

        setupSettingsPanel();

        setupFontSizeSettings();

        setupDensitySettings();

        setupAnimationSettings();

        setupThemeSettings();

        setupSoundSettings();

        setupRadioSettings();

        setupResetSettings();

        applyAllSiteSettings();
    }
);


/* =========================================================
   AYARLARI YÜKLE
========================================================= */

function loadSiteSettings() {

    try {

        const saved =
            localStorage.getItem(
                "bilmediginSeylerSettings"
            );

        if (!saved) {
            return;
        }

        const parsed =
            JSON.parse(saved);

        siteSettings = {
            ...DEFAULT_SITE_SETTINGS,
            ...parsed
        };

    } catch (error) {

        console.warn(
            "Site ayarları yüklenemedi:",
            error
        );

        siteSettings = {
            ...DEFAULT_SITE_SETTINGS
        };
    }
}


/* =========================================================
   AYARLARI KAYDET
========================================================= */

function saveSiteSettings() {

    try {

        localStorage.setItem(
            "bilmediginSeylerSettings",
            JSON.stringify(siteSettings)
        );

    } catch (error) {

        console.warn(
            "Site ayarları kaydedilemedi:",
            error
        );
    }
}


/* =========================================================
   TÜM AYARLARI UYGULA
========================================================= */

function applyAllSiteSettings() {

    applyFontSize();

    applyDensity();

    applyAnimations();

    applyTheme();

    applySoundSettings();

    applyRadioVolume();

    updateSettingsControls();
}


/* =========================================================
   AYARLAR PANELİ
========================================================= */

function setupSettingsPanel() {

    const settingsButton =
        document.getElementById(
            "settingsButton"
        );

    const settingsPanel =
        document.getElementById(
            "settingsPanel"
        );

    const settingsBackdrop =
        document.getElementById(
            "settingsBackdrop"
        );

    const closeSettings =
        document.getElementById(
            "closeSettings"
        );


    if (
        !settingsButton ||
        !settingsPanel
    ) {
        return;
    }


    settingsButton.addEventListener(
        "click",
        () => {

            openSettingsPanel();
        }
    );


    if (closeSettings) {

        closeSettings.addEventListener(
            "click",
            () => {

                closeSettingsPanel();
            }
        );
    }


    if (settingsBackdrop) {

        settingsBackdrop.addEventListener(
            "click",
            () => {

                closeSettingsPanel();
            }
        );
    }


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSettingsPanel();
            }
        }
    );
}


function openSettingsPanel() {

    const panel =
        document.getElementById(
            "settingsPanel"
        );

    const backdrop =
        document.getElementById(
            "settingsBackdrop"
        );


    if (panel) {
        panel.classList.add("active");
    }

    if (backdrop) {
        backdrop.classList.add("active");
    }
}


function closeSettingsPanel() {

    const panel =
        document.getElementById(
            "settingsPanel"
        );

    const backdrop =
        document.getElementById(
            "settingsBackdrop"
        );


    if (panel) {
        panel.classList.remove("active");
    }

    if (backdrop) {
        backdrop.classList.remove("active");
    }
}


/* =========================================================
   YAZI BOYUTU
========================================================= */

function setupFontSizeSettings() {

    const buttons =
        document.querySelectorAll(
            "[data-font-size]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const size =
                        button.dataset.fontSize;

                    siteSettings.fontSize =
                        size;

                    applyFontSize();

                    updateSettingsControls();

                    saveSiteSettings();

                    playSettingClickSound();
                }
            );
        }
    );
}


function applyFontSize() {

    document.documentElement.setAttribute(
        "data-font-size",
        siteSettings.fontSize
    );
}


/* =========================================================
   ARAYÜZ YOĞUNLUĞU
========================================================= */

function setupDensitySettings() {

    const buttons =
        document.querySelectorAll(
            "[data-density]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    siteSettings.density =
                        button.dataset.density;

                    applyDensity();

                    updateSettingsControls();

                    saveSiteSettings();

                    playSettingClickSound();
                }
            );
        }
    );
}


function applyDensity() {

    document.documentElement.setAttribute(
        "data-density",
        siteSettings.density
    );
}


/* =========================================================
   ANİMASYON
========================================================= */

function setupAnimationSettings() {

    const toggle =
        document.getElementById(
            "animationToggle"
        );


    if (!toggle) {
        return;
    }


    toggle.addEventListener(
        "change",
        () => {

            siteSettings.animations =
                toggle.checked;

            applyAnimations();

            saveSiteSettings();

            playSettingClickSound();
        }
    );
}


function applyAnimations() {

    document.documentElement.setAttribute(
        "data-animations",
        siteSettings.animations
            ? "on"
            : "off"
    );
}


/* =========================================================
   TEMA
========================================================= */

function setupThemeSettings() {

    const buttons =
        document.querySelectorAll(
            "[data-theme]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    siteSettings.theme =
                        button.dataset.theme;

                    applyTheme();

                    updateSettingsControls();

                    saveSiteSettings();

                    playSettingClickSound();
                }
            );
        }
    );
}


function applyTheme() {

    document.documentElement.setAttribute(
        "data-theme",
        siteSettings.theme
    );
}


/* =========================================================
   SES AYARLARI
========================================================= */

function setupSoundSettings() {

    const buttonSound =
        document.getElementById(
            "buttonSoundToggle"
        );

    const resultSound =
        document.getElementById(
            "resultSoundToggle"
        );


    if (buttonSound) {

        buttonSound.addEventListener(
            "change",
            () => {

                siteSettings.buttonSounds =
                    buttonSound.checked;

                saveSiteSettings();

                if (
                    siteSettings.buttonSounds
                ) {
                    playInterfaceSound(
                        "click"
                    );
                }
            }
        );
    }


    if (resultSound) {

        resultSound.addEventListener(
            "change",
            () => {

                siteSettings.resultSounds =
                    resultSound.checked;

                saveSiteSettings();

                playSettingClickSound();
            }
        );
    }
}


function applySoundSettings() {

    const buttonSound =
        document.getElementById(
            "buttonSoundToggle"
        );

    const resultSound =
        document.getElementById(
            "resultSoundToggle"
        );


    if (buttonSound) {

        buttonSound.checked =
            siteSettings.buttonSounds;
    }


    if (resultSound) {

        resultSound.checked =
            siteSettings.resultSounds;
    }
}


/* =========================================================
   WEB AUDIO SES EFEKTLERİ
========================================================= */

let siteAudioContext = null;


function getSiteAudioContext() {

    if (!siteAudioContext) {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContextClass) {
            return null;
        }


        siteAudioContext =
            new AudioContextClass();
    }


    return siteAudioContext;
}


function playInterfaceSound(type) {

    const context =
        getSiteAudioContext();


    if (!context) {
        return;
    }


    if (
        context.state === "suspended"
    ) {

        context.resume();
    }


    const oscillator =
        context.createOscillator();

    const gain =
        context.createGain();


    oscillator.connect(gain);

    gain.connect(
        context.destination
    );


    if (type === "result") {

        oscillator.frequency.value =
            660;

        gain.gain.setValueAtTime(
            0.035,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime + 0.18
        );

        oscillator.start();

        oscillator.stop(
            context.currentTime + 0.18
        );

    } else {

        oscillator.frequency.value =
            420;

        gain.gain.setValueAtTime(
            0.018,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime + 0.055
        );

        oscillator.start();

        oscillator.stop(
            context.currentTime + 0.055
        );
    }
}


function playSettingClickSound() {

    if (
        siteSettings.buttonSounds
    ) {

        playInterfaceSound(
            "click"
        );
    }
}


/* =========================================================
   GLOBAL BUTON SESİ
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {
            return;
        }


        /*
           Ayar kontrollerinde ses zaten
           kendi fonksiyonunda oynatılıyor.
        */

        if (
            button.closest(
                "#settingsPanel"
            )
        ) {
            return;
        }


        if (
            siteSettings.buttonSounds
        ) {

            playInterfaceSound(
                "click"
            );
        }
    }
);


/* =========================================================
   SONUÇ SESİ İÇİN FONKSİYON
========================================================= */

function playSiteResultSound() {

    if (
        !siteSettings.resultSounds
    ) {
        return;
    }


    playInterfaceSound(
        "result"
    );
}


/*
   Bundan sonra istediğimiz deneyin
   sonuç fonksiyonuna sadece:

   playSiteResultSound();

   ekleyerek sonuç sesini çalıştırabiliriz.
*/


/* =========================================================
   RADYO
========================================================= */

function setupRadioSettings() {

    const audio =
        document.getElementById(
            "siteRadioPlayer"
        );

    const playButton =
        document.getElementById(
            "radioPlayButton"
        );

    const previousButton =
        document.getElementById(
            "radioPrevious"
        );

    const nextButton =
        document.getElementById(
            "radioNext"
        );

    const volume =
        document.getElementById(
            "radioVolume"
        );

    const stationButtons =
        document.querySelectorAll(
            ".radio-station"
        );


    if (!audio) {
        return;
    }


    const savedIndex =
        siteRadioStations.findIndex(
            station =>
                station.id ===
                siteSettings.radioStation
        );


    currentRadioIndex =
        savedIndex >= 0
            ? savedIndex
            : 0;


    updateRadioInterface();


    if (playButton) {

        playButton.addEventListener(
            "click",
            () => {

                toggleSiteRadio();
            }
        );
    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                changeRadioStation(-1);
            }
        );
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                changeRadioStation(1);
            }
        );
    }


    stationButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const stationId =
                        button.dataset.station;


                    const index =
                        siteRadioStations.findIndex(
                            station =>
                                station.id ===
                                stationId
                        );


                    if (index < 0) {
                        return;
                    }


                    selectRadioStation(
                        index
                    );
                }
            );
        }
    );


    if (volume) {

        volume.addEventListener(
            "input",
            () => {

                siteSettings.radioVolume =
                    Number(
                        volume.value
                    );

                applyRadioVolume();

                saveSiteSettings();
            }
        );
    }


    audio.addEventListener(
        "playing",
        () => {

            radioIsPlaying = true;

            setRadioStatus(
                "Canlı yayın oynatılıyor"
            );

            updateRadioInterface();
        }
    );


    audio.addEventListener(
        "pause",
        () => {

            radioIsPlaying = false;

            setRadioStatus(
                "Yayın duraklatıldı"
            );

            updateRadioInterface();
        }
    );


    audio.addEventListener(
        "waiting",
        () => {

            setRadioStatus(
                "Yayın yükleniyor..."
            );
        }
    );


    audio.addEventListener(
        "error",
        () => {

            radioIsPlaying = false;

            setRadioStatus(
                "Bu yayın şu anda açılamıyor"
            );

            updateRadioInterface();
        }
    );
}


/* =========================================================
   RADYO AÇ / KAPAT
========================================================= */

async function toggleSiteRadio() {

    const audio =
        document.getElementById(
            "siteRadioPlayer"
        );


    if (!audio) {
        return;
    }


    if (radioIsPlaying) {

        audio.pause();

        return;
    }


    const station =
        siteRadioStations[
            currentRadioIndex
        ];


    if (
        !station ||
        !station.stream
    ) {

        setRadioStatus(
            "Yayın bağlantısı henüz eklenmedi"
        );

        return;
    }


    if (
        audio.src !== station.stream
    ) {

        audio.src =
            station.stream;
    }


    setRadioStatus(
        "Bağlanılıyor..."
    );


    try {

        await audio.play();

    } catch (error) {

        radioIsPlaying = false;

        setRadioStatus(
            "Tarayıcı yayını başlatamadı"
        );

        updateRadioInterface();

        console.warn(
            "Radyo başlatılamadı:",
            error
        );
    }
}


/* =========================================================
   RADYO DEĞİŞTİR
========================================================= */

function changeRadioStation(direction) {

    let nextIndex =
        currentRadioIndex +
        direction;


    if (
        nextIndex <
        0
    ) {

        nextIndex =
            siteRadioStations.length - 1;
    }


    if (
        nextIndex >=
        siteRadioStations.length
    ) {

        nextIndex = 0;
    }


    selectRadioStation(
        nextIndex
    );
}


function selectRadioStation(index) {

    const audio =
        document.getElementById(
            "siteRadioPlayer"
        );


    const wasPlaying =
        radioIsPlaying;


    if (
        index < 0 ||
        index >=
        siteRadioStations.length
    ) {
        return;
    }


    if (audio) {

        audio.pause();

        audio.removeAttribute(
            "src"
        );

        audio.load();
    }


    currentRadioIndex =
        index;


    const station =
        siteRadioStations[
            currentRadioIndex
        ];


    siteSettings.radioStation =
        station.id;


    saveSiteSettings();

    updateRadioInterface();


    setRadioStatus(
        "Dinlemeye hazır"
    );


    /*
       Önceki istasyon çalıyorsa
       yenisine otomatik geçmeyi dener.
    */

    if (
        wasPlaying &&
        station.stream
    ) {

        toggleSiteRadio();
    }
}


/* =========================================================
   RADYO SESİ
========================================================= */

function applyRadioVolume() {

    const audio =
        document.getElementById(
            "siteRadioPlayer"
        );

    const slider =
        document.getElementById(
            "radioVolume"
        );

    const value =
        document.getElementById(
            "radioVolumeValue"
        );


    const volume =
        Math.max(
            0,
            Math.min(
                100,
                Number(
                    siteSettings.radioVolume
                )
            )
        );


    if (audio) {

        audio.volume =
            volume / 100;
    }


    if (slider) {

        slider.value =
            volume;
    }


    if (value) {

        value.textContent =
            `${volume}%`;
    }
}


/* =========================================================
   RADYO ARAYÜZÜ
========================================================= */

function updateRadioInterface() {

    const station =
        siteRadioStations[
            currentRadioIndex
        ];


    if (!station) {
        return;
    }


    const name =
        document.getElementById(
            "currentRadioName"
        );

    const playButton =
        document.getElementById(
            "radioPlayButton"
        );

    const visualizer =
        document.getElementById(
            "radioVisualizer"
        );

    const indicator =
        document.getElementById(
            "radioPlayingIndicator"
        );


    if (name) {

        name.textContent =
            station.name;
    }


    if (playButton) {

        playButton.textContent =
            radioIsPlaying
                ? "❚❚"
                : "▶";
    }


    if (visualizer) {

        visualizer.classList.toggle(
            "playing",
            radioIsPlaying
        );
    }


    if (indicator) {

        indicator.classList.toggle(
            "active",
            radioIsPlaying
        );
    }


    document
        .querySelectorAll(
            ".radio-station"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.station ===
                        station.id
                );
            }
        );
}


function setRadioStatus(text) {

    const status =
        document.getElementById(
            "radioStatus"
        );


    if (status) {

        status.textContent =
            text;
    }
}


/* =========================================================
   KONTROLLERİN GÖRÜNÜMÜNÜ GÜNCELLE
========================================================= */

function updateSettingsControls() {

    /*
       YAZI BOYUTU
    */

    document
        .querySelectorAll(
            "[data-font-size]"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.fontSize ===
                        siteSettings.fontSize
                );
            }
        );


    const fontStatus =
        document.getElementById(
            "fontSizeStatus"
        );


    if (fontStatus) {

        const names = {
            small: "KÜÇÜK",
            normal: "NORMAL",
            large: "BÜYÜK",
            xlarge: "ÇOK BÜYÜK"
        };


        fontStatus.textContent =
            names[
                siteSettings.fontSize
            ] || "NORMAL";
    }


    /*
       YOĞUNLUK
    */

    document
        .querySelectorAll(
            "[data-density]"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.density ===
                        siteSettings.density
                );
            }
        );


    /*
       TEMA
    */

    document
        .querySelectorAll(
            "[data-theme]"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.theme ===
                        siteSettings.theme
                );
            }
        );


    /*
       ANİMASYON
    */

    const animationToggle =
        document.getElementById(
            "animationToggle"
        );


    if (animationToggle) {

        animationToggle.checked =
            siteSettings.animations;
    }


    /*
       SES
    */

    applySoundSettings();

    applyRadioVolume();

    updateRadioInterface();
}


/* =========================================================
   AYARLARI SIFIRLA
========================================================= */

function setupResetSettings() {

    const resetButton =
        document.getElementById(
            "resetSiteSettings"
        );


    if (!resetButton) {
        return;
    }


    resetButton.addEventListener(
        "click",
        () => {

            resetAllSiteSettings();
        }
    );
}


function resetAllSiteSettings() {

    const audio =
        document.getElementById(
            "siteRadioPlayer"
        );


    if (audio) {

        audio.pause();

        audio.removeAttribute(
            "src"
        );

        audio.load();
    }


    radioIsPlaying = false;

    siteSettings = {
        ...DEFAULT_SITE_SETTINGS
    };


    currentRadioIndex = 0;


    saveSiteSettings();

    applyAllSiteSettings();

    setRadioStatus(
        "Dinlemeye hazır"
    );
}

/* =========================================
   YAZI BOYUTU AYARI
========================================= */

const fontSizeButtons = document.querySelectorAll("[data-font-size]");

function setSiteFontSize(size) {

    document.documentElement.setAttribute(
        "data-font-size",
        size
    );

    localStorage.setItem(
        "siteFontSize",
        size
    );

    fontSizeButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.fontSize === size
        );

    });

}


/* Butonlara tıklama */

fontSizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        setSiteFontSize(
            button.dataset.fontSize
        );

    });

});


/* Sayfa açılınca son seçimi geri yükle */

const savedFontSize =
    localStorage.getItem("siteFontSize") || "normal";

setSiteFontSize(savedFontSize);
