# Vendored Claude Code Skills

Bu dizindeki skill'ler dört açık kaynak repodan kopyalanmıştır. Güncelleme
gerektiğinde burada düzenlemek yerine kaynak repodan yeniden kopyalanmaları
önerilir.

| Kaynak | Commit | Skill | Lisans |
| --- | --- | --- | --- |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | `7868cb9` | 49 | MIT |
| [charlie947/social-media-skills](https://github.com/charlie947/social-media-skills) | `94f72ea` | 17 | MIT |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | `7809e79` | 12 | belirtilmemiş |
| [blader/humanizer](https://github.com/blader/humanizer) | `523374d` | 1 | MIT |

Toplam 79 skill.

## Bu klasörün siteyle ilgisi yok

`.claude/` yalnızca Claude Code'un araç ayarlarıdır. Next.js bu klasörü okumaz,
build'e girmez, yayına çıkmaz. Site kodunu etkilemez.

## Dizin yerleşimi

- Skill'ler `.claude/skills/<ad>/` altında **kardeş** duruyor. Remotion skill'leri
  birbirine `../../<skill>/SKILL.md` ile referans veriyor; bu düz yerleşim o
  linklerin çözülmesini sağlıyor.
- `.claude/tools/` marketingskills reposunun kökündeki `tools/` dizinidir.
  `attribution`, `referrals`, `revops` ona `../../tools/REGISTRY.md` üzerinden
  referans veriyor, bu yüzden bu konumda kalmalı — taşınırsa linkler kırılır.

## Notlar

- `humanizer` skill'i Claude Code'da yerleşik olarak da geliyor ve içeriği
  blader/humanizer ile byte-byte aynı. Repo kendi kendine yeterli olsun diye
  buraya da kopyalandı; içerik aynı olduğu için davranış farkı yok.
- Doğrulama: 79/79 `SKILL.md` geçerli frontmatter'a sahip, dizin adları `name`
  alanıyla eşleşiyor, göreli markdown linklerinde kırık yok, isim çakışması yok.
