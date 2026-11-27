// News-image entry for 26 November 2026: the front page is entry.png beside this
// file, composed in this session from four original generated illustrations plus a
// programmatic newspaper layout (masthead, headlines and captions drawn with PIL).
// The page sums up Thursday 26 November 2026: the Kuwait drone strike that killed
// two Italians (lead), Kim Jong Un showing off nuclear warheads, the Bangkok oil
// refinery blast, Russian missiles hitting a Kyiv shopping mall, Guinea-Bissau
// delaying its elections, and Israeli strikes killing nine in Gaza — each verified
// against reporting from Reuters, KCNA, Al Jazeera, CNN, Kyiv Independent and the
// Bangkok Post that day. Stories first reported on another day (the Cairo tanker
// fire and the US tariff announcement, both 25 November) were deliberately left out.
// The program copies it to /output/entry.png. Node 22, standard library only, no
// network, deterministic: the same bytes are written on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
