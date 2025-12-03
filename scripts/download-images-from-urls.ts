import axios from "axios";
import * as fs from "fs/promises";
import * as path from "path";

// ============================================================
// Configuration - 여기에 URL 배열과 카테고리명을 설정하세요
// ============================================================
const CATEGORY_NAME = "pricing";

const IMAGE_URLS: string[] = [
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6501;0;4164;0,width=640,height=292,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/12/opl-master-3.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=16181;0;4353;0,width=640,height=400,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/12/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7866;0;81;0,width=640,height=392,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-sixtep-screen.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1161;0;11444;0,width=640,height=375,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-master-premium-business.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=21186;0;5597;0,width=640,height=797,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-master-10.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13966;0;6154;0,width=640,height=396,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=26802;0;2350;0,width=640,height=372,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=989;0;5000;0,width=640,height=283,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-master-3.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=21081;0;4217;0,width=640,height=561,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/10/opl-master-kyoso.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2978;0;2474;0,width=640,height=242,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/09/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9619;0;5500;0,width=640,height=676,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/09/opl-master-nvgt.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6368;0;179;0,width=640,height=307,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/09/opl-master-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4190;0;3843;0,width=640,height=508,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/08/opl-master-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9660;0;2874;0,width=640,height=522,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/08/opl-master-15.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8559;0;1331;0,width=640,height=341,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/08/opl-master-11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14733;0;3593;0,width=640,height=424,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/08/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6379;0;1197;0,width=640,height=493,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/08/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5198;0;266;0,width=640,height=387,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/08/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8838;0;1769;0,width=640,height=595,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/07/opl-master-logopoint.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6485;0;5328;0,width=640,height=544,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/07/opl-master-uimagic.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=21191;0;3947;0,width=640,height=650,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/07/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13429;0;2193;0,width=640,height=290,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/07/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7552;0;3846;0,width=640,height=442,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/05/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6702;0;5429;0,width=640,height=705,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/06/opl-master-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2526;0;2490;0,width=640,height=389,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/06/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13144;0;2442;0,width=640,height=465,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/06/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4090;0;2558;0,width=640,height=473,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/05/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8684;0;11185;0,width=640,height=338,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/05/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8385;0;2596;0,width=640,height=404,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/04/opl-master-wwk.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5552;0;8678;0,width=640,height=420,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-km.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15002;0;776;0,width=640,height=195,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/04/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10720;0;5681;0,width=640,height=594,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/04/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11109;0;8897;0,width=640,height=433,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-espanium.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=21251;0;2421;0,width=640,height=539,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/04/opl-master-rfx.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=23022;0;830;0,width=640,height=389,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-glass.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=19441;0;2225;0,width=640,height=373,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-good.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9190;0;1918;0,width=640,height=297,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-wittl.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10398;0;7024;0,width=640,height=385,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13024;0;926;0,width=640,height=414,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/03/opl-master-motion.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6829;0;4124;0,width=640,height=353,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/02/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11967;0;4662;0,width=640,height=518,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/02/opl-master-16.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1811;0;8367;0,width=640,height=193,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/02/opl-master-12.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13185;0;2047;0,width=640,height=649,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/02/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9765;0;2817;0,width=640,height=924,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/01/opl-master-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8114;0;2477;0,width=640,height=341,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/01/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3168;0;6;0,width=640,height=391,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/01/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6041;0;3783;0,width=640,height=583,fit=cover,format=jpg,quality=85/wp-content/uploads/2025/01/opl-master-other.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9934;0;6876;0,width=640,height=291,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/12/opl-porter.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=29577;0;913;0,width=640,height=464,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/11/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=18168;0;3029;0,width=640,height=544,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/10/opl-master-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=20069;0;94;0,width=640,height=647,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/10/opl-master-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9138;0;3282;0,width=640,height=309,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/10/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3446;0;1128;0,width=640,height=374,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/09/opl-master-23.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=17717;0;6357;0,width=640,height=721,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/09/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8101;0;2693;0,width=640,height=321,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/09/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14067;0;5602;0,width=640,height=728,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/09/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7296;0;3749;0,width=640,height=600,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/09/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10920;0;7870;0,width=640,height=574,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/09/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13378;0;6258;0,width=640,height=632,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/08/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=24358;0;934;0,width=640,height=445,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/07/opl-master-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=17901;0;5140;0,width=640,height=406,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/07/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=18099;0;3112;0,width=640,height=292,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/06/opl-master-pff.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1139;0;9569;0,width=640,height=202,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/06/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2675;0;4168;0,width=640,height=244,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-26.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10885;0;2532;0,width=640,height=468,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2253;0;6448;0,width=640,height=265,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13560;0;462;0,width=640,height=473,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=23253;0;7899;0,width=640,height=532,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10656;0;3760;0,width=640,height=208,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-ss.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=19940;0;4844;0,width=640,height=543,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/05/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13595;0;4925;0,width=640,height=571,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/04/opl-master-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5974;0;6052;0,width=640,height=410,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/04/opl-master-jades.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=26810;0;14;0,width=640,height=439,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/04/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6542;0;1525;0,width=640,height=433,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/03/opl-master-27.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3293;0;3966;0,width=640,height=916,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/03/opl-master-ugur.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=19018;0;1138;0,width=640,height=208,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/02/opl-master-24.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13800;0;4373;0,width=640,height=715,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/02/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15745;0;269;0,width=640,height=499,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/02/opl-master-11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3;0;17753;0,width=640,height=274,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/02/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4261;0;2549;0,width=640,height=351,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/01/opl-master-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11233;0;4736;0,width=640,height=478,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/01/opl-master-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13051;0;13697;0,width=640,height=845,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/01/opl-arrow.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7754;0;3331;0,width=640,height=552,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/01/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12250;0;1493;0,width=640,height=408,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/01/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14261;0;3474;0,width=640,height=579,fit=cover,format=jpg,quality=85/wp-content/uploads/2024/01/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7636;0;4016;0,width=640,height=733,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/12/opl-master-26.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7331;0;3758;0,width=640,height=468,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/12/opl-master-11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=23904;0;351;0,width=640,height=580,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/12/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10030;0;3766;0,width=640,height=476,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-26.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7443;0;4035;0,width=640,height=480,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-32.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12797;0;3586;0,width=640,height=530,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=18457;0;973;0,width=640,height=428,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8201;0;3495;0,width=640,height=425,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15048;0;2084;0,width=640,height=445,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-cw.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=19568;0;2572;0,width=640,height=507,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-dt.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15925;0;3410;0,width=640,height=454,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-10.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14418;0;3155;0,width=640,height=706,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9319;0;3059;0,width=640,height=652,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/11/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12227;0;2962;0,width=640,height=488,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/10/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=19976;0;148;0,width=640,height=493,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/10/opl-master-inflate.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7648;0;978;0,width=640,height=439,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/10/opl-master-10.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6218;0;1933;0,width=640,height=552,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/10/opl-master-contrast.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10678;0;2052;0,width=640,height=947,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/09/opl-master-hey-jay.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10441;0;4846;0,width=640,height=438,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/09/opl-master-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15953;0;5133;0,width=640,height=796,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/09/opl-master-hey.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10176;0;6611;0,width=640,height=816,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/09/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9652;0;2727;0,width=640,height=1161,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/11/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13999;0;3787;0,width=640,height=510,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/09/opl-master-ds.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10191;0;476;0,width=640,height=425,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/08/opl-master-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9321;0;1967;0,width=640,height=470,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/08/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12239;0;1321;0,width=640,height=538,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/08/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5312;0;2545;0,width=640,height=474,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/08/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11876;0;4555;0,width=640,height=593,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/08/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13500;0;192;0,width=640,height=324,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/07/opl-master-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8945;0;5474;0,width=640,height=865,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/07/opl-master-16.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11632;0;2756;0,width=640,height=553,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/07/opl-master-3.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13511;0;3627;0,width=640,height=782,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/06/opl-master-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11617;0;3426;0,width=640,height=484,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/06/opl-master-12.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11533;0;289;0,width=640,height=409,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/06/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11289;0;3879;0,width=640,height=531,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/05/opl-screenshot-33.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10735;0;4316;0,width=640,height=582,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/05/opl-screenshot-35.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14733;0;804;0,width=640,height=345,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/05/opl-screenshot-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12420;0;2768;0,width=640,height=626,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/05/opl-master-10.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6426;0;6067;0,width=640,height=390,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/05/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13683;0;4167;0,width=640,height=445,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/04/opl-screenshot-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12287;0;4876;0,width=640,height=555,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/05/opl-master-3.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5857;0;195;0,width=640,height=345,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/04/opl-screenshot.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8570;0;5180;0,width=640,height=429,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/04/opl-screenshot-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6647;0;9108;0,width=640,height=923,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/03/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=17385;0;848;0,width=640,height=347,fit=cover,format=jpg,quality=85/wp-content/uploads/2023/03/opl-screenshot-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14173;0;344;0,width=640,height=518,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/12/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10302;0;1280;0,width=640,height=375,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/12/opl-screenshot.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=18865;0;3334;0,width=640,height=577,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/11/opl-screenshot-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15038;0;881;0,width=640,height=448,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/11/opl-screenshot-24.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4640;0;422;0,width=640,height=153,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/11/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11986;0;5990;0,width=640,height=688,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/10/opl-screenshot-32.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13165;0;2037;0,width=640,height=449,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/11/opl-master-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13948;0;650;0,width=640,height=498,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/10/opl-screenshot-31.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8039;0;294;0,width=640,height=519,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/10/opl-screenshot-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=22850;0;661;0,width=640,height=410,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/10/opl-screenshot-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=17186;0;1855;0,width=640,height=495,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/09/opl-screenshot-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13271;0;2053;0,width=640,height=636,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/08/opl-screenshot-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14517;0;2604;0,width=640,height=443,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/08/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7263;0;2800;0,width=640,height=362,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/07/opl-master-12.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3231;0;8274;0,width=640,height=596,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/07/opl-screenshot-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7385;0;1634;0,width=640,height=217,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/07/opl-screenshot-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6519;0;4024;0,width=640,height=422,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/07/opl-screenshot-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5938;0;2568;0,width=640,height=487,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/06/opl-screenshot-27.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8331;0;575;0,width=640,height=312,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/06/opl-screenshot-15.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7217;0;6229;0,width=640,height=651,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/06/opl-screenshot-copy-4.jpeg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1379;0;8745;0,width=640,height=665,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/05/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10229;0;3574;0,width=640,height=386,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/05/opl-screenshot-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7103;0;383;0,width=640,height=243,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/05/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8174;0;3109;0,width=640,height=567,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/05/opl-screenshot.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11832;0;5788;0,width=640,height=400,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/05/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3415;0;565;0,width=640,height=264,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/reversechaos.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=808;0;7512;0,width=640,height=389,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/Formula1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10794;0;2680;0,width=640,height=435,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/opl-master-25.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10826;0;3419;0,width=640,height=332,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/opl-master-24.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5323;0;4440;0,width=640,height=502,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10011;0;4982;0,width=640,height=535,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/opl-master-12.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12364;0;2019;0,width=640,height=542,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/opl-master-5.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6442;0;2089;0,width=640,height=262,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/04/opl-master-3.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5648;0;5745;0,width=640,height=485,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/03/opl-master-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13378;0;2360;0,width=640,height=478,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/03/opl-master-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6392;0;6526;0,width=640,height=416,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/03/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4578;0;245;0,width=640,height=382,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/03/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15539;0;1358;0,width=640,height=663,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/03/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4922;0;5400;0,width=640,height=387,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/02/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9177;0;2206;0,width=640,height=450,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/01/opl-master-16.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15510;0;6;0,width=640,height=345,fit=cover,format=jpg,quality=85/wp-content/uploads/2022/01/opl-master-15.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2024;0;2054;0,width=640,height=137,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/12/opl-master-12.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11634;0;786;0,width=640,height=403,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/12/opl-master-10.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12397;0;734;0,width=640,height=390,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/12/opl-master-js-advent.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13763;0;642;0,width=640,height=610,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/12/opl-master-universal.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12188;0;10;0,width=640,height=427,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/12/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1709;0;11834;0,width=640,height=456,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/11/opl-master-21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13878;0;2185;0,width=640,height=334,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/11/opl-master-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11588;0;879;0,width=640,height=606,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/11/opl-master-12.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14543;0;3973;0,width=640,height=431,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/11/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5205;0;1977;0,width=640,height=262,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/10/opl-master-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8894;0;3356;0,width=640,height=426,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/10/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6597;0;2425;0,width=640,height=368,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/10/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15095;0;3052;0,width=640,height=583,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/10/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7822;0;773;0,width=640,height=635,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/09/opl-master-33.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15884;0;515;0,width=640,height=369,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/09/opl-master-29.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7826;0;4862;0,width=640,height=653,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/09/opl-master-24.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5692;0;2787;0,width=640,height=548,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/09/opl-master-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8266;0;385;0,width=640,height=404,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/08/opl-master-28.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7701;0;2963;0,width=640,height=303,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/08/opl-master-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10096;0;671;0,width=640,height=604,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/07/opl-master-29.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6312;0;1085;0,width=640,height=379,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/06/opl-master-27.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12825;0;1033;0,width=640,height=521,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/06/opl-master-lance.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8535;0;367;0,width=640,height=379,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/06/opl-master-slides.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12254;0;2082;0,width=640,height=305,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/06/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=12615;0;981;0,width=640,height=460,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/05/opl-master-5.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7904;0;1316;0,width=640,height=504,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/03/opl-master-26.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3775;0;783;0,width=640,height=602,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/03/opl-master-24.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8922;0;1105;0,width=640,height=480,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/03/opl-master-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3093;0;4558;0,width=640,height=652,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/03/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9153;0;1205;0,width=640,height=410,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/02/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8170;0;853;0,width=640,height=567,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/01/opl-master-27.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=16905;0;13;0,width=640,height=425,fit=cover,format=jpg,quality=85/wp-content/uploads/2021/01/opl-master-24.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15554;0;164;0,width=640,height=507,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/12/opl-master-11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9363;0;1054;0,width=640,height=300,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/12/opl-master-vzy.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14163;0;398;0,width=640,height=468,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/11/opl-master-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5781;0;5986;0,width=640,height=685,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/10/opl-master-16.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4935;0;3307;0,width=640,height=1279,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/10/opl-master-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=15791;0;1041;0,width=640,height=448,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/09/opl-master-15.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=10791;0;1324;0,width=640,height=611,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/09/opl-master-ilo.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4927;0;8359;0,width=640,height=574,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/08/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2944;0;1184;0,width=640,height=360,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/07/opl-master-11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14267;0;1030;0,width=640,height=463,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/11/opl-master-11-12-39-947.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11107;0;5961;0,width=640,height=751,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/06/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8039;0;281;0,width=640,height=368,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/05/opl-master-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6389;0;2375;0,width=640,height=607,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/04/opl-master-15.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8325;0;4482;0,width=640,height=440,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/04/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4114;0;1212;0,width=640,height=592,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/03/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=13208;0;224;0,width=640,height=422,fit=cover,format=jpg,quality=85/wp-content/uploads/2020/01/opl-master-14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5254;0;737;0,width=640,height=250,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/12/opl-master-16.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8687;0;195;0,width=640,height=456,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/11/opl-master-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8815;0;1470;0,width=640,height=387,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/11/opl-master-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8127;0;2674;0,width=640,height=341,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/10/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8211;0;417;0,width=640,height=213,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/09/opl-master-25.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6262;0;562;0,width=640,height=338,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/09/opl-master-17.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5040;0;3346;0,width=640,height=465,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/09/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3259;0;463;0,width=640,height=428,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/09/opl-master-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1821;0;914;0,width=640,height=304,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/08/opl-master-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6078;0;1142;0,width=640,height=293,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/07/opl-master-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11898;0;2378;0,width=640,height=613,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/07/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=11189;0;7901;0,width=640,height=439,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/07/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9520;0;107;0,width=640,height=362,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/02/opl-master-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7799;0;1821;0,width=640,height=346,fit=cover,format=jpg,quality=85/wp-content/uploads/2019/02/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7664;0;1779;0,width=640,height=371,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/12/opl-master-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5763;0;7740;0,width=640,height=784,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/12/opl-master-1.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5883;0;663;0,width=640,height=374,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/12/opl-master.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8779;0;413;0,width=640,height=308,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/11/opl-big-6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2462;0;10;0,width=640,height=356,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/10/opl-big-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5026;0;2235;0,width=640,height=606,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/09/opl-big-19.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=9887;0;895;0,width=640,height=532,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/09/opl-big-9.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4779;0;1480;0,width=640,height=409,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/05/opl-big-25.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=7139;0;297;0,width=640,height=484,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/05/opl-big-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5278;0;1673;0,width=640,height=360,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/05/opl-big-7.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5989;0;989;0,width=640,height=353,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/03/opl-big-22.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8694;0;2958;0,width=640,height=505,fit=cover,format=jpg,quality=85/wp-content/uploads/2018/02/opl-big-4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6676;0;1870;0,width=640,height=373,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/11/opl-big-27.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3938;0;5047;0,width=640,height=320,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/11/opl-big-20.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=14682;0;2279;0,width=640,height=586,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/11/opl-big-5.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2987;0;570;0,width=640,height=267,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/08/opl-big-13.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=6043;0;229;0,width=640,height=412,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/07/opl-big-18.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2484;0;237;0,width=640,height=114,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/05/opl-big.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1119;0;2419;0,width=640,height=517,fit=cover,format=jpg,quality=85/wp-content/uploads/2017/04/opl-big-27.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3757;0;944;0,width=640,height=471,fit=cover,format=jpg,quality=85/wp-content/uploads/2016/03/opl-big-28.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1474;0;3347;0,width=640,height=519,fit=cover,format=jpg,quality=85/wp-content/uploads/2016/05/opl-big-40.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5975;0;1349;0,width=640,height=364,fit=cover,format=jpg,quality=85/wp-content/uploads/2016/05/opl-screenshot-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5424;0;1098;0,width=640,height=419,fit=cover,format=jpg,quality=85/wp-content/uploads/2016/03/opl-big-8.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4900;0;1128;0,width=640,height=566,fit=cover,format=jpg,quality=85/wp-content/uploads/2015/09/olp-big.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1945;0;588;0,width=640,height=416,fit=cover,format=jpg,quality=85/wp-content/uploads/2015/07/opl-big14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=2465;0;1049;0,width=640,height=286,fit=cover,format=jpg,quality=85/wp-content/uploads/2015/06/opl-big55.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=8183;0;317;0,width=640,height=363,fit=cover,format=jpg,quality=85/wp-content/uploads/gravity/GSDK.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=550;0;2378;0,width=640,height=604,fit=cover,format=jpg,quality=85/wp-content/uploads/gravity/1280-2.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4598;0;1170;0,width=640,height=537,fit=cover,format=jpg,quality=85/wp-content/uploads/2015/03/opl-big26.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1754;0;3607;0,width=640,height=298,fit=cover,format=jpg,quality=85/wp-content/uploads/gravity/TACO-Web-UX-Design-Wir-erschaffen-um-zu-beeindrucken.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=5574;0;930;0,width=640,height=390,fit=cover,format=jpg,quality=85/wp-content/uploads/2014/11/opl-big10.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3323;0;70;0,width=640,height=218,fit=cover,format=jpg,quality=85/wp-content/uploads/2014/10/opl-big25.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3103;0;1051;0,width=640,height=381,fit=cover,format=jpg,quality=85/wp-content/uploads/2014/09/opl-big11.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3836;0;272;0,width=640,height=456,fit=cover,format=jpg,quality=85/wp-content/uploads/2014/07/opl-big49.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1996;0;1724;0,width=640,height=319,fit=cover,format=jpg,quality=85/wp-content/uploads/gravity/epicentre-big.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4116;0;1182;0,width=640,height=552,fit=cover,format=jpg,quality=85/wp-content/uploads/2014/06/opl-big21.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3910;0;2703;0,width=640,height=448,fit=cover,format=jpg,quality=85/wp-content/uploads/2014/05/opl-big38.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3372;0;826;0,width=640,height=597,fit=cover,format=jpg,quality=85/wp-content/uploads/2013/08/opl-big4.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=4688;0;13;0,width=640,height=401,fit=cover,format=jpg,quality=85/wp-content/uploads/2013/10/opl-big6.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=618;0;3195;0,width=640,height=554,fit=cover,format=jpg,quality=85/wp-content/uploads/2013/07/opl-big14.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=804;0;1420;0,width=640,height=792,fit=cover,format=jpg,quality=85/wp-content/uploads/2013/06/opl-big15.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1261;0;974;0,width=640,height=311,fit=cover,format=jpg,quality=85/wp-content/uploads/gravity/fonerescue-big.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1120;0;630;0,width=640,height=340,fit=cover,format=jpg,quality=85/wp-content/uploads/gravity/flock_home.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=3304;0;499;0,width=640,height=400,fit=cover,format=jpg,quality=85/wp-content/uploads/2013/04/opl-big.jpg",
  "https://assets.onepagelove.com/cdn-cgi/image/trim=1794;0;408;0,width=640,height=139,fit=cover,format=jpg,quality=85/wp-content/uploads/2012/11/opl-big33.jpg",
];
// ============================================================

const CONCURRENCY_LIMIT = 5;

function extractNameFromUrl(url: string): string {
  const urlWithoutQuery = url.split("?")[0];
  const lastSegment = urlWithoutQuery.split("/").pop() || "unknown";
  const nameWithoutExt = lastSegment.replace(/\.[^.]+$/, "");
  return nameWithoutExt || "unknown";
}

async function downloadImage(
  url: string,
  outputDir: string
): Promise<{ success: boolean; name: string; path?: string; error?: string }> {
  const name = extractNameFromUrl(url);
  const fileName = `${name}.png`;
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
  if (IMAGE_URLS.length === 0) {
    console.error("Error: IMAGE_URLS 배열이 비어있습니다.");
    console.error(
      "스크립트 상단의 IMAGE_URLS에 다운로드할 이미지를 추가하세요."
    );
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, "..");
  const outputDir = path.join(projectRoot, "agent-input", CATEGORY_NAME);

  console.log(`Category: ${CATEGORY_NAME}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Found ${IMAGE_URLS.length} images to download`);
  console.log(`Concurrency limit: ${CONCURRENCY_LIMIT}`);
  console.log("");

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true });

  // Download images with concurrency limit
  const results = await downloadWithConcurrencyLimit(
    IMAGE_URLS,
    CONCURRENCY_LIMIT,
    (url) => downloadImage(url, outputDir)
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
  console.log(`Total: ${IMAGE_URLS.length}`);
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
