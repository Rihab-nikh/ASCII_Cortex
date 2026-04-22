Here's a complete Figma-ready design & animation spec — the **Lando Norris site structure transplanted onto ASCII Cortex**, with a sci-fi blue/purple/violet palette:

---

## 🎨 COLOR SYSTEM

| Role | Color | Hex |
|---|---|---|
| Background (deep space) | Near-black navy | `#05050F` |
| Surface / Cards | Dark indigo | `#0D0D1F` |
| Primary Accent | Electric violet | `#7B2FFF` |
| Secondary Accent | Cyan-blue | `#00C2FF` |
| Highlight / Glow | Neon purple | `#BF5FFF` |
| Text Primary | Cold white | `#EEF0FF` |
| Text Secondary | Muted slate | `#7A7FA8` |
| Gradient A→B | `#7B2FFF` → `#00C2FF` (violet to cyan) |
| Glow blur overlay | `#5500FF` @ 15% opacity, spread large |

**Signature / Logo line art** → rendered in `#00C2FF` (cyan) to mirror the lime signature role on LN's site.

---

## 🔤 TYPOGRAPHY

- **Hero Display**: Ultra-condensed, all-caps — e.g. *Druk Wide*, *Neue Machina*, or *Space Grotesk Bold*. For words like `ASCII CORTEX`, `AI AGENCY`, `ON MISSION`
- **Sub-labels**: Tiny uppercase sans, `0.15–0.2em` tracking — for tags like `"AI-native since 2019"`, `"Proof of concept → Production"`
- **Body**: Clean geometric sans — *Inter*, *DM Sans*, or *Geist*
- **Quote / Pull text**: Large italic or bold, centered — for statements like *"We don't just solve problems — we uncover what AI can truly do."*

---

## 📐 PAGE STRUCTURE (mirroring LN's sections)

### 1. LOAD GATE
Branded full-screen intro cover. Text: `"INITIALIZING ASCII CORTEX"` with a pulsing violet progress bar or glitching scan-line effect. Fades out to reveal site.

### 2. HERO
- Full-viewport, locked portrait on mobile: *"This is a vertical mission."*
- Giant stacked type: `H1 = "ASCII CORTEX"` / `H2 = "AI-Native Product & Solutions Agency"`
- `"Next Project:"` pill badge → links to case studies (mirrors "Next Race")
- Sub-label: `"AI-native since 2019"`
- **Signature equivalent**: a glowing cyan circuit-trace SVG (self-drawing on load) — like a PCB line or neural network path, acting as the brand mark underline
- "tap to lock / Back to scroll" mobile toggle retained

### 3. MESSAGE FROM THE AGENCY
Replaces "Message from Lando" — a bold editorial statement:
> *"Redefining limits, shipping AI, building what's next. Defining a legacy in intelligent software — in production, not just pitch decks."*

Paired with 2–3 atmospheric editorial photos: team at work, a prototype live on screen, a client presentation.

### 4. HORIZONTAL PHOTO STORY REEL
Scroll-jacked horizontal reel — same mechanic as LN's. Captioned tiles:
- `"AI Agent launch, 2024"`
- `"Computer Vision PoC, 2023"`
- `"Chatbot live for 1M+ users"`
- `"60% fewer support hours"`
- Personal/culture shots: team, off-sites, whiteboard sessions

### 5. ON MISSION / OFF MISSION (mirrors ON TRACK / OFF TRACK)
Massive split stacked text reveal:
- **ON MISSION** — case studies, results, tech stack, client outcomes
- **OFF MISSION** — team culture, events, thought leadership content

### 6. SOLUTIONS HALL OF FAME (mirrors Helmet Hall of Fame)
Grid of **product/solution cards** — each with a base + hover state swap:
- AI Agents, Chatbots, Computer Vision, AI Consulting, PoC Development, Data Intelligence
- Hover = card glows with violet underlight + alternate visual (result metric or live demo screenshot swaps in)
- Bottom edge fade: grey → `#7B2FFF` on hover

### 7. STORE → CLIENT PORTAL / CASE STUDIES CTA
Replaces store section. Large editorial CTA block:
> *"World-Class AI. Built for your business."*
> Imagery of live dashboards, working prototypes, client logos.

### 8. PARTNERS & CAMPAIGNS MARQUEE
Infinite horizontal ticker of partner/client logos — same dual-row mechanic, rows scroll in opposite directions.

### 9. SOCIAL / CONTENT GRID
Photo grid of LinkedIn posts, talks, demos, event coverage. Same masonry-style layout.

### 10. FOOTER
- Tagline: **`"Always bringing the intelligence."`**
- Rotating 3D holographic sphere or neural mesh animation (replaces helmet spin) — using Three.js or Rive
- Floating ambient blob shapes in deep violet/indigo SVG
- Sponsor-tier logos: key tech partners (OpenAI, HuggingFace, etc.)

---

## ✨ ANIMATIONS SPEC

**Load Gate**
- Scan-line glitch effect over agency name → dissolve out
- Duration: ~2s, then snap-reveal hero

**Hero**
- `H1` slides up from `translateY(100%)` → `0`, opacity `0→1`, `600ms ease-out`
- `H2` follows with `100ms` delay
- Circuit-trace SVG: `stroke-dashoffset` animation, draws over `1.2s`
- Subtle background: animated **star-field or particle mesh** (small dots connected by violet lines — Three.js canvas, low opacity)

**Horizontal Photo Reel**
- Vertical scroll → drives `translateX` on photo container (GSAP ScrollTrigger)
- Images enter at `scale(0.95)` → `1.0` + `opacity 0→1`
- Captions: `translateY(20px)→0` with `200ms` delay after image

**Solution Cards (Helmet equiv.)**
- Hover: image cross-dissolves (`opacity` on layered images, `150ms ease-out`)
- Lime glow → **violet glow**: bottom mask shifts from grey to `#7B2FFF`
- Subtle `scale(1.02)` on the card wrapper

**Section Title Reveals (ON MISSION / OFF MISSION)**
- Text lives in `overflow: hidden` container
- On scroll enter: `translateY(110%)→0`, `800ms cubic-bezier(0.16,1,0.3,1)`
- Each letter or word staggers by `40ms`

**Partner Marquee**
- CSS `@keyframes marquee` — `translateX(0) → translateX(-50%)`, infinite, ~30s
- Row 2 runs `animation-direction: reverse`

**Footer Orb**
- 3D rotating particle sphere or neural mesh (Three.js `r128` `Points` geometry)
- Color: `#7B2FFF` to `#00C2FF` gradient on points
- Slow rotation: Y-axis `0.002 rad/frame`
- Ambient blob SVGs: `scale(1)↔(1.05)` + `translateY(0px)↔(8px)`, `8s ease-in-out infinite`

**Nav Overlay**
- Click → full-screen `#0D0D1F` overlay scales from `scaleY(0)→1` (origin top), `400ms`
- 6–8 image tiles stagger in: `opacity 0→1` + `translateY(20px)→0`, `50ms` apart
- Nav links: text mask wipe left→right per link, `60ms` stagger

---

## 📱 MOBILE NOTES
- Portrait lock with *"This is a vertical mission."* rotate prompt
- `ASCII CORTEX` renders as a custom SVG wordmark sized to mobile viewport width
- Touch "tap to lock" enables a dedicated swipe-through story mode

---

## 🔧 FIGMA COMPONENT NOTES

| Component | Technique |
|---|---|
| Solution cards | 2 variants (Base / Hover), Smart Animate |
| Hero entrance | Scroll-triggered prototype or After Effects reference |
| Circuit signature | Stroke vector, Trim Path keyframes |
| Particle background | Export as Lottie from AE or use Rive |
| Partner marquee | Horizontal scroll frame, overflow hidden |
| Footer orb | Lottie or embedded Three.js in handoff notes |
| Blob shapes | Organic SVG paths, Auto Animate loop |
| Color tokens | Define as `brand/violet`, `brand/cyan`, `surface/dark`, `text/primary` |