"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF5722", // Orange-red
    accentLight: "#FFCCBC",
  },
  dark: {
    accent: "#FF7043",
    accentLight: "#BF360C",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface FlexTeamFeature6Props {
  mode?: "light" | "dark";
}

const EXPENSE_DATA = [
  { status: "미제출", vendor: "SigM", date: "12월 16일 (월) 오전 10:26", amount: "2,710,000 원", method: "법인카드 하나 7792", type: null, user: null, warning: false },
  { status: "미제출", vendor: "Google", date: "12월 13일 (금) 오후 11:04", amount: "해외 127,300 원", method: "법인카드 하나 7792", type: null, user: null, warning: false },
  { status: "제출", type: "점심식대", vendor: "진우동", date: "12월 12일 (목) 오후 12:50", amount: "30,000 원", method: "법인카드 신한 5903", user: { name: "박시현", team: "인사팀", count: "2명" }, warning: false },
  { status: "제출", type: "점심식대", vendor: "하노이 쌀국수", date: "12월 12일 (목) 오후 12:48", amount: "16,000 원", method: "법인카드 신한 4826", user: { name: "장유안", team: "경영지원팀", count: "1명" }, warning: true },
  { status: "제출", type: "광고비", vendor: "Meta", date: "12월 12일 (목) 오후 12:30", amount: "해외 459,210 원", method: "법인카드 하나 7792", user: { name: "이채린", team: "마케팅팀", count: "", date: "2024-73" }, warning: false },
  { status: "제출", type: "점심식대", vendor: "맛나분식", date: "12월 12일 (목) 오후 12:26", amount: "30,000 원", method: "법인카드 신한 1658", user: { name: "박주안", team: "인천관리팀", count: "3명" }, warning: false },
];

export default function FlexTeamFeature6({
  mode = "light",
}: FlexTeamFeature6Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-white px-8 py-20 lg:px-16">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            비용 관리와 절감을 위해
          </h2>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: colors.accent }}>
            <path d="M16 4L20 12H28L22 18L24 28L16 22L8 28L10 18L4 12H12L16 4Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-gray-600 mb-2">
          HR을 넘어, 기업에서 발생하는 Finance의 비효율을 해결합니다.
        </p>
        <p className="text-gray-600 mb-6">
          그 시작은 &quot;비용 관리&quot;입니다.
        </p>
        <a
          href="/expense"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#00C853]"
        >
          자세히 알아보기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Dashboard Preview */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] p-4 shadow-lg">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b bg-white p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">증빙</h3>
              <div className="flex items-center gap-2">
                <button className="rounded border p-2 text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="rounded border p-2 text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M3 4H13M3 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="rounded border px-3 py-2 text-sm text-gray-700">지출결의 문서함</button>
                <button className="flex items-center gap-1 rounded bg-[#00C853] px-3 py-2 text-sm text-white">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  증빙 추가
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 text-sm">
              <button className="border-b-2 border-gray-900 pb-2 font-medium text-gray-900">전체</button>
              <button className="pb-2 text-gray-500">법인카드</button>
              <button className="pb-2 text-gray-500">세금계산서</button>
              <button className="pb-2 text-gray-500">현금영수증</button>
              <button className="pb-2 text-gray-500">기타</button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b bg-gray-50 px-4 py-2">
            <button className="rounded border bg-white px-3 py-1 text-xs">전체</button>
            <button className="rounded border bg-white px-3 py-1 text-xs">확인 필요</button>
            <button className="flex items-center gap-1 rounded border bg-white px-3 py-1 text-xs">
              거래 일시 최근 30일
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="flex items-center gap-1 rounded border bg-white px-3 py-1 text-xs">
              증빙 상태
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="flex items-center gap-1 rounded border bg-white px-3 py-1 text-xs">
              용도
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="flex items-center gap-1 text-xs text-gray-500">
              + 필터 추가
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">확인</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">증빙 상태</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">용도</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">사용처</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">거래 일시</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500">합계 금액</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">증빙 수단</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">제출자</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">사용 인원</th>
                </tr>
              </thead>
              <tbody>
                {EXPENSE_DATA.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">
                      {row.warning && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-amber-500">
                          <path d="M8 5V8M8 11H8.01M3 14H13L8 4L3 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded px-2 py-0.5 text-xs ${
                        row.status === "미제출" ? "bg-gray-100 text-gray-600" :
                        row.status === "제출" ? "bg-green-100 text-green-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.type || "-"}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.vendor}</td>
                    <td className="px-4 py-3 text-gray-600">{row.date}</td>
                    <td className="px-4 py-3 text-right font-medium text-gray-900">{row.amount}</td>
                    <td className="px-4 py-3 text-gray-600">{row.method}</td>
                    <td className="px-4 py-3">
                      {row.user ? (
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gray-200" />
                          <span className="text-gray-900">{row.user.name}</span>
                          <span className="text-xs text-gray-500">{row.user.team}</span>
                        </div>
                      ) : "-"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.user?.count || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
