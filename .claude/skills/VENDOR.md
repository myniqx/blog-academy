# Vendored Claude Code Skills

Bu dizindeki skill'ler dört ayrı açık kaynak repodan kopyalanmıştır (vendored).
Doğrudan burada düzenlemek yerine, güncelleme gerektiğinde kaynak repodan yeniden
kopyalanmaları önerilir.

| Kaynak | Commit | Skill sayısı | Lisans |
| --- | --- | --- | --- |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | `7868cb9` | 49 | MIT |
| [charlie947/social-media-skills](https://github.com/charlie947/social-media-skills) | `94f72ea` | 17 | MIT |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | `7809e79` | 12 | belirtilmemiş |
| [blader/humanizer](https://github.com/blader/humanizer) | `523374d` | 1 | MIT |

Toplam: 79 skill.

## Dizin yerleşimi hakkında

- Tüm skill'ler `.claude/skills/<skill-adı>/` altında **kardeş** olarak duruyor.
  Remotion skill'leri birbirine `../../<diğer-skill>/SKILL.md` şeklinde göreli
  linkler veriyor; bu düzen o linklerin çözülmesini sağlıyor.
- `.claude/tools/` dizini `coreyhaines31/marketingskills` reposunun kökündeki
  `tools/` dizinidir. `attribution`, `referrals`, `revops` gibi skill'ler ona
  `../../tools/REGISTRY.md` üzerinden referans veriyor, bu yüzden `.claude/`
  altında bu konumda olması gerekiyor — taşınırsa o linkler kırılır.

## Notlar

- `humanizer` skill'i bu ortamda yerleşik olarak da mevcut ve içeriği
  blader/humanizer ile byte-byte aynı. Repoyu kendi kendine yeterli tutmak için
  yine de buraya kopyalandı; proje düzeyindeki kopya yerleşik olanı gölgeler,
  içerik aynı olduğu için davranış farkı yok.
- Kurulum sonrası doğrulama: 79/79 `SKILL.md` geçerli frontmatter'a sahip,
  dizin adları `name` alanıyla eşleşiyor ve göreli markdown linklerinde kırık yok.
