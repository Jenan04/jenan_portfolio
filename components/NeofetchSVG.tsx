const ASCII_LINES = [
  "                                            ",
  "                 ...,...                    ",
  "             .,.:,,::, .::,                 ",
  "            ,,  ,;,  ..,..,:,..             ",
  "           :t:,i11;, ;t;...,:..,            ",
  "         .,1i;f1i;.;:,,;,,:  .,,,           ",
  "        ,it1 ;i::;1ttt: i; ...i:.           ",
  "       .iit; .;11iiiii1ttti,;:,:.,          ",
  "       ;1.. :1i;;;;;;;;ii1f;., :,;          ",
  "      .it  ,1;;;;;;;;;;;;;1i:. ;; ,         ",
  "      .;t..i;;;;;;;;;;;;;;;ii: ,;.,         ",
  "       ,:.;i;;;;;;;;;;;;;;;;ii.:;,;         ",
  "       ,,.1;;;;;;;;;;;;;;;;;;1:,i,;         ",
  "       .:1i;;;;;;;;;;;;;;;;;;;i,::;,        ",
  "       i;fi;;;;;;;;;;;;;;;;;;;i; :11        ",
  "       ii1i;;;;;;;;;;;;;;;;;;;;;.;i1        ",
  "        ,11;;;;;;;;;;;;;;;;;;;;;,1i1        ",
  "         :1;;;;;;;;;;;;;;;;;;;;::ti1.       ",
  "          1i;;;;;;;;;;;;;;;;;;;;;i1f,       ",
  "         .t1;;;;;;;;;;;;;;;;;;;i1;;L:       ",
  "          11;;;;;;;;;;;;;;;;;;;1i.;f        ",
  "           1t;;;;;;;;;;;;;;;;;i1::ti        ",
  "            :i;;;;;;;;;;;;;;;t1;.1L.        ",
  "             :fi;;;;;;;;;;i1t;::1L;         ",
  "            1GL11i;;;;;;ii:;; ::1:          ",
  "           i81tt11tt11i;;;,, :;:;           ",
  "          ,C0fi1iii;;iii;;;:,:,L8,          ",
  "        .1GCCGti111111ii;:;1tfCGGf          ",
  "    ,itLGGCCCCCLt11fLf11fLCGGGGCCG,         ",
  "LCCCGGGGGCCCCCCCCCCCCCCCGGGCCCCCCGi         ",
  "GCCCCCCC0CCCCCGGGG0CGGGCCCCCCCCCGG0Li       ",
  "CCCCCCCC0CCG000GGCGGCCCCCCCCCGGGG08GGC:     ",
  "CCCCCCCC0G00GCCCGGG80GGGGGGGGGGG00CCCCGf:   ",
  "CCCCCCCCCCCCCCCCCCGG0000GGGCCCCGCCCCCCCGGL: ",
];

export default function NeofetchSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="'JetBrains Mono','Consolas',monospace"
      width="100%"
      viewBox="0 0 985 560"
      fontSize="14px"
      style={{ display: "block" }}
    >
      <style>{`.k{fill:#ffa657}.v{fill:#a5d6ff}.a{fill:#3fb950}.d{fill:#f85149}.c{fill:#616e7f}text,tspan{white-space:pre}`}</style>

      {/* ASCII art */}
      <text x="15" y="28" fill="#c9d1d9">
        {ASCII_LINES.map((line, i) => (
          <tspan key={i} x="15" y={28 + i * 15}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Neofetch info panel */}
      <text x="395" y="28" fill="#c9d1d9" fontSize="14px">
        <tspan x="395" y="28" fill="#58a6ff">
          Jenan Y. AbuHasanein
        </tspan>
        <tspan fill="#616e7f"> ─────────────────────────────────────────</tspan>

        <tspan x="395" y="48" className="c">
          .{" "}
        </tspan>
        <tspan className="k">OS</tspan>
        <tspan className="c">: ......................... </tspan>
        <tspan className="v">Linux, Windows 11</tspan>

        <tspan x="395" y="68" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Host</tspan>
        <tspan className="c">: ..................... </tspan>
        <tspan className="v">Al-Azhar University — CS Engineering</tspan>

        <tspan x="395" y="88" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Kernel</tspan>
        <tspan className="c">: ................... </tspan>
        <tspan className="v">Full-Stack Software Engineer</tspan>

        <tspan x="395" y="108" className="c">
          .{" "}
        </tspan>
        <tspan className="k">IDE</tspan>
        <tspan className="c">: ......................... </tspan>
        <tspan className="v">VSCode, IntelliJ IDEA, Kiro</tspan>

        <tspan x="395" y="128" className="c">
          .{" "}
        </tspan>

        <tspan x="395" y="148" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Languages.Programming</tspan>
        <tspan className="c">: .... </tspan>
        <tspan className="v">PHP 8.4, JavaScript, TypeScript, Python</tspan>

        <tspan x="395" y="163" className="c">
          {"    ↳ Syntax is secondary to strong core concepts & logic."}
        </tspan>

        <tspan x="395" y="183" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Languages.Frameworks</tspan>
        <tspan className="c">: ...... </tspan>
        <tspan className="v">Laravel 13, React, Next.js, Express</tspan>

        <tspan x="395" y="203" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Languages.Markup</tspan>
        <tspan className="c">: .......... </tspan>
        <tspan className="v">HTML, CSS, Tailwind, JSON, SQL, YAML</tspan>

        <tspan x="395" y="223" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Languages.Real</tspan>
        <tspan className="c">: ............. </tspan>
        <tspan className="v">Arabic (Native), English</tspan>

        <tspan x="395" y="243" className="c">
          .{" "}
        </tspan>

        <tspan x="395" y="263" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Architecture</tspan>
        <tspan className="c">: .............. </tspan>
        <tspan className="v">Clean Code, SOLID, Design Patterns, Scrum</tspan>

        <tspan x="395" y="283" className="c">
          .{" "}
        </tspan>
        <tspan className="k">{"Cloud&Tools"}</tspan>
        <tspan className="c">: ................ </tspan>
        <tspan className="v">AWS (EC2, S3), Git, Docker, pnpm, Figma</tspan>

        <tspan x="395" y="303" className="c">
          .{" "}
        </tspan>

        <tspan x="395" y="323" fill="#c9d1d9">
          - Contact{" "}
        </tspan>
        <tspan fill="#616e7f">────────────────────────────────────────</tspan>

        <tspan x="395" y="343" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Email</tspan>
        <tspan className="c">: ..................... </tspan>
        <tspan className="v">jenanyasser1@gmail.com</tspan>

        <tspan x="395" y="363" className="c">
          .{" "}
        </tspan>
        <tspan className="k">LinkedIn</tspan>
        <tspan className="c">: .................. </tspan>
        <tspan className="v">linkedin.com/in/jenan-abuhassanein</tspan>

        <tspan x="395" y="383" className="c">
          .{" "}
        </tspan>
        <tspan className="k">GitHub</tspan>
        <tspan className="c">: .................... </tspan>
        <tspan className="v">github.com/Jenan04</tspan>

        <tspan x="395" y="403" className="c">
          .{" "}
        </tspan>

        <tspan x="395" y="423" fill="#c9d1d9">
          - Traineeships{" "}
        </tspan>
        <tspan fill="#616e7f">─────────────────────────────────────</tspan>

        <tspan x="395" y="443" className="c">
          .{" "}
        </tspan>
        <tspan className="k">eLancer Program</tspan>
        <tspan className="c">: .......... </tspan>
        <tspan className="v">Backend & Laravel Trainee</tspan>

        <tspan x="395" y="463" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Wasla Connect</tspan>
        <tspan className="c">: ............. </tspan>
        <tspan className="v">Mentee</tspan>

        <tspan x="395" y="483" className="c">
          .{" "}
        </tspan>
        <tspan className="k">Yaffa-Solutions</tspan>
        <tspan className="c">: .......... </tspan>
        <tspan className="v">Full-Stack Developer Trainee</tspan>
      </text>
    </svg>
  );
}