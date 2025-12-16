import axios from "axios";
import * as fs from "fs/promises";
import * as path from "path";

// ============================================================
// Configuration - 여기에 DATA_STRING과 카테고리명을 설정하세요
// ============================================================
const CATEGORY_NAME = "saaspo-feature-sections";

// name,url 형식의 문자열 (각 줄마다 name,url)
const DATA_STRING = `Lightning Proxies,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c47a41f50ccbb1b570cb_Lightning-Proxies---Features-2.jpeg
Greenhouse,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6e56b64bd1ad929bcc5_Greenhouse---Features.jpeg
Secoda,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd4c7de6ab8a5ac04402_Secoda---Features.jpeg
Harmonic,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3fac3e65feb82cf4c37_Harmonic---Features.jpeg
Miter,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841e391657f0f4be9e75_Miter---Features-2.jpeg
Localyzer,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d1728d1909f87fca58e416_Localyzer---Features.jpeg
Finsepa,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6ea4266d677c98cd313_Finsepa---Features-2.jpeg
Clutch Security,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841e391657f0f4be9e7c_Clutch---Features.jpeg
Jasper,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6867f4caa2bdfc469abe16e7_Jasper---Features.jpeg
Loop,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cda97417ee853afa0940e_Loop---Features.jpeg
Plain,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e32701cb5cb55215d476f5_Plain---Features.jpeg
Outerbase,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679b549f752fdd8ab80ad6f2_Outerbase---Features-2.jpeg
Delphi,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6867f4caa2bdfc469abe16f9_Delphi---Features.jpeg
Port,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd61b2bccb38155cfc94c_Port---Features.jpeg
Lightning Proxies,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c3b67a531c093fc6aa62_Lightning-Proxies---Features.jpeg
Crisp,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cee76419be620608100f0_Crisp---Features.jpeg
Sandbar,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f61191e_Sandbar---Features.jpeg
Typebot,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67a9cdfc7651bb71120b8397_Typebot---Features.jpeg
Ditto,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e471d15ba43589d6bf2532_Ditto---Features-3.jpeg
Ditto,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e471cda6d9fbea667dc29a_Ditto---Features-2.jpeg
Chargetrip,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e32325aacd503fb96fe4c4_Chargetrip---Features.jpeg
Latitude,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841cdbd865f4798815d3_Latitude---Features.jpeg
Noxus,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d172881909f87fca58de89_Noxus---Features.jpeg
Spara,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b74797d8ce578dc3cf50_Spara---Features.jpeg
Lattice,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b6c97f045c531655e929_Lattice---Features.jpeg
Outseta,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b7028fac698c7d23c6e0_Outseta---Features-2.jpeg
Routable,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd6afe354e42c8ffba4ff_Routable---Features-2.jpeg
Cloudflare Agents,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6ce705f0fcc4943515f_Cloudflare-Agents---Features.jpeg
Incident,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e46f18ced9a7d7da1aa4e9_Incident---Features-2.jpeg
DevRev,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce362e39922fe5bd49aa1_Devrev---Features.jpeg
Paraform,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928b839043d906a95dd11c4_Paraform---Features.jpeg
Seamless,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f611925_Seamless---Features-2.jpeg
Finsepa,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6dc1289c3f3ae179d9e_Finsepa---Features.jpeg
Parker,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6e8299df68ed6a533d4_Parker---Features.jpeg
Evervault,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b6964f95e6f9751ea7a5_Evervault---Features.jpeg
8returns,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6d20b7483a7d17665f2_8Returns---Features.jpeg
Godmode,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d171020728ef1ff7b9ced5_Godmode---Features.jpeg
Wiza,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b64b39e180b41e6ec4af_Wiza---Features.jpeg
Figr,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3c1ba5df8e91d65acfd_Figr---Features.jpeg
Canopy,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce2fcf0f1415aab6348b0_Canopy---Features-2.jpeg
11x,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3676ae597c02d01b472_11x---Features.jpeg
Laravel Cloud,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c834b5f85b1230209de699_Laravel-Cloud---Features.jpeg
Hyperline,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841e391657f0f4be9e78_Hyperline---Features.jpeg
Jitter,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6dae58615293317ac17_Jitter---Features.jpeg
Localyzer,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d1728fdcd0120b8c2bfe8e_Localyzer---Features-2.jpeg
Promptwatch,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6ed141d328377863c35_Promptwatch---Features.jpeg
Fellow,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f611928_Fellow---Features.jpeg
Liveblocks,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679b521abeb9a81fbe169ac0_Liveblocks---Features.jpeg
Jasper,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce412429d0fe870f0f016_Jasper---Use-cases.jpeg
Hellotime,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b6c60c9dbc70de5828b1_Hellotime---Features.jpeg
Dovetail,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6cc69009a00cf2cd59a_Dovetail---Features.jpeg
Rubus,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6dd0cb75902c2a838c9_Rubus---Features.jpeg
Acctual,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6e16c67708eed64876b_Acctual---Features.jpeg
Submagic,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b74ae48c11764df54685_Submagic---Features.jpeg
Sandbar,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd4c7de6ab8a5ac04405_Sandbar---Features-2.jpeg
Seamless,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f611921_Seamless---Features.jpeg
Lindy,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b6cd9f9cf3e4e5186a13_Lindy---Features.jpeg
Invertase,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67a9cdf21b7d2767f9c40311_Invertase---Features.jpeg
Gradient Labs,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c1fa2072dd9e3421242382_Gradient-Labs---Features.jpeg
Invertase,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67a9cdf6ab3f8430ffc0f6be_Invertase---Features-2.jpeg
Outseta,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b755ffb9044aa307f5d8_Outseta---Features.jpeg
Jasper,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd747e0eee85cced6632e_Jasper---Features-2.jpeg
Pallet,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841cdbd865f4798815d8_Pallet---Features.jpeg
Cowlendar,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b69461237d3eaee8984e_Cowlendar---Features.jpeg
Headroom,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841cdbd865f4798815db_Headroom---Features.jpeg
Outtake,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67f3936fef1eff42802bc326_Outtake---Features.jpeg
Rayon,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd62c6ad5a32d78af7adf_Rayon---Features.jpeg
Voiceflow,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b750ddb2e391ef59f883_Voiceflow---Features.jpeg
Laravel Cloud,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c834b021fefcf11a8633d6_Laravel-Cloud---Features-2.jpeg
Aria,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce2f589c99224c22e66f2_Aria---Features.jpeg
Vectara,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce348245f832ebc8b5b84_Vectara---Features-2.jpeg
Steel Dev,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd928ac4ee0b44a2607c9_Steel---Features.jpeg
Lynq,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f61192b_Lynq---Features.jpeg
Phidata,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b740e90df14e2f21a806_Phidata---Features.jpeg
Maybe,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f61192e_Maybe---Features-2.jpeg
Koyeb,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6836eef7f1982af15a68f35f_Koyeb---Features.jpeg
Adora,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c1f93b4435c64b0ab52de7_Adora---Features.jpeg
DevRev,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3bfa57c016bd5044af5_Devrev---Features-2.jpeg
Miter,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928841e391657f0f4be9e80_Miter---Features.jpeg
Maybe,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f611934_Maybe---Features.jpeg
Ferndesk,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/69038acdc984abf604738f5b_Ferndesk---Features.jpeg
Plain,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b742aaf57ddaa38ccebb_Plain---Features.jpeg
Cap,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6867f4caa2bdfc469abe16e1_Cap---Features.jpeg
Firecrawl,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928b81a97eb54db67e0de39_Firecrawl---Features.jpeg
Synthesia,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67daa065398e882a40444368_Synthesia---Features.jpeg
Exante,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b69dddb2e391ef59131d_Exante---Features.jpeg
DevRev,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce34f2dd9b6a0f8d94539_Devrev---Solutions.jpeg
Frankli,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d170ecb208688cd1e6f999_Frankli---Features.jpeg
Linear,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b6cf360f13b517b4b3db_Linear---Features.jpeg
Vectara,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3468e092b1d381630a3_Vectara---Features.jpeg
Lightning Proxies,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c47f818534d56b4c18a9_Lightning-Proxies---Features-3.jpeg
Orshot,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f611939_Orshot---Features.jpeg
Amplemarket,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b68bf2d8af1ada72ac9a_Amplemarket---Features-2.jpeg
Sevalla,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd8740e93a7f0618ec444_Sevalla---Features.jpeg
Amini,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6835b2346ccb2de32a7fe28f_Amini---Features.jpeg
Incident,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e471c8f995ce5072318fbf_Incident---Features.jpeg
Dovetail,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6dfda8345a195c331a3_Dovetail---Features-2.jpeg
Ditto,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67e471cbdb9e2b20887e2fb7_Ditto---Features.jpeg
Dash0,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c1fa1d16533c5260e2f325_Dash0---Features.jpeg
Crescent Cares,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c1f9291cf869e561a44b13_Crescent-Cares---Features.jpeg
Spellbook,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd884d2629864cfb3cde8_Spellbook---Features.jpeg
Highnote,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c1fa23f6e1ba0492840352_Highnote---Features.jpeg
Bounti,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c6d6141d328377863986_Bounti---Features.jpeg
Amplemarket,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b687cd073ae4e6fb2624_Amplemarket---Features.jpeg
Mintlify,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3055f338b6fbb14f88d_Mintlify---Features.jpeg
Groundcover,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67a9cdeda778e836c702d6db_Groundcover---Feautures.jpeg
Chatbase,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c831760f35956e48960a6c_Chatbase---Features.jpeg
Realm,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f61193d_Realm---Features.jpeg
Voiceflow,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b7525d4f6abe8404f501_Voiceflow---Features-2.jpeg
Realm,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/683ecd47a7de6fce1f611931_Realm---Features-2.jpeg
Basewell,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67f3933f4cec903e1e15259f_Basewell---Features.jpeg
Outerbase,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679b54950a8d6218b9b8a6ee_Outerbase---Features.jpeg
Flank,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6928b839043d906a95dd11c8_Flank---Features.jpeg
Coframe,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c6e92d87cf5d575846e7ca_Coframe---Features.jpeg
Finta,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c6e92fdf24d9acce2a4888_Finta---Features.jpeg
Vercel,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b74c2794c6b16193b022_Vercel---Features.jpeg
Canopy,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce3b5429d0fe870f07eeb_Canopy---Features.jpeg
Jasper,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ce303429d0fe870ef92d6_Jasper---Features.jpeg
Quicklnk,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d17284dd53e47394ec6b6f_Quicklink---Features.jpeg
Bucket,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6794b68f73b5ecd145381f1c_Bucket---Features.jpeg
Routable,https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cd6764cc02d7c73e21f57_Routable---Features.jpeg
`;
// ============================================================

const CONCURRENCY_LIMIT = 5;

interface ImageEntry {
  name: string;
  url: string;
}

function toKebabCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseDataString(data: string): ImageEntry[] {
  const lines = data
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const entries: ImageEntry[] = [];

  for (const line of lines) {
    const commaIndex = line.indexOf(",");
    if (commaIndex === -1) continue;

    const name = line.substring(0, commaIndex).trim();
    const url = line.substring(commaIndex + 1).trim();

    if (name && url) {
      entries.push({
        name: toKebabCase(name),
        url,
      });
    }
  }

  return entries;
}

async function downloadImage(
  entry: ImageEntry,
  outputDir: string
): Promise<{ success: boolean; name: string; path?: string; error?: string }> {
  const { name, url } = entry;
  const fileName = `${name}.jpg`;
  const filePath = path.join(outputDir, fileName);

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    });

    await fs.writeFile(filePath, response.data);
    return { success: true, name, path: filePath };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, name, error: message };
  }
}

async function downloadWithConcurrencyLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];
  const executing: Promise<void>[] = [];

  for (const item of items) {
    const p = fn(item).then((result) => {
      results.push(result);
    });

    executing.push(p as unknown as Promise<void>);

    if (executing.length >= limit) {
      await Promise.race(executing);
      executing.splice(
        executing.findIndex((e) => e === p),
        1
      );
    }
  }

  await Promise.all(executing);
  return results;
}

async function main() {
  const entries = parseDataString(DATA_STRING);

  if (entries.length === 0) {
    console.error("Error: DATA_STRING이 비어있거나 유효한 데이터가 없습니다.");
    console.error(
      "스크립트 상단의 DATA_STRING에 name,url 형식의 데이터를 추가하세요."
    );
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, "..");
  const outputDir = path.join(projectRoot, "agent-input", CATEGORY_NAME);

  console.log(`Category: ${CATEGORY_NAME}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Found ${entries.length} images to download`);
  console.log(`Concurrency limit: ${CONCURRENCY_LIMIT}`);
  console.log("");

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true });

  // Download images with concurrency limit
  const results = await downloadWithConcurrencyLimit(
    entries,
    CONCURRENCY_LIMIT,
    (entry) => downloadImage(entry, outputDir)
  );

  // Process results
  const succeeded: string[] = [];
  const failed: { name: string; error: string }[] = [];

  for (const result of results) {
    if (result.success && result.path) {
      succeeded.push(result.path);
      console.log(`✓ Downloaded: ${result.name}`);
    } else if (!result.success) {
      failed.push({
        name: result.name,
        error: result.error || "Unknown error",
      });
      console.log(`✗ Failed: ${result.name} - ${result.error}`);
    }
  }

  // Summary
  console.log("");
  console.log("=".repeat(50));
  console.log(`Total: ${entries.length}`);
  console.log(`Success: ${succeeded.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log("");
    console.log("Failed images:");
    for (const f of failed) {
      console.log(`  - ${f.name}: ${f.error}`);
    }
    process.exit(1);
  }
}

main();
