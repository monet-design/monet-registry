아래 이미지 url들에 대해서 다음 작업 수행하라.

1. 각 이미지 url를 모두 다운로드해 `/agent-input/landingfolio-stats/{name}.jpg` 경로에 이미지 파일로 생성한다.
2. img-to-component agent를 병렬로 호출해 1번 단계의 이미지들만을 대상으로 컴포넌트로 구현한다.
3. puppeteer-swarm mcp로 브라우저/탭을 launch해둔다. 이를 이후 agent들에서 공용으로 사용할 것이다.
4. next.js dev server를 실행한다. 이미 3000번 포트에 실행중인지 체크하고, 이미 실행중이라면 하지않는다.
5. 구현된 컴포넌트들에 대해서, component-implement-check agent를 병렬로 호출해 디자인 점검하고 개선한다.

---

1. **Stats 1**: `https://landingfoliocom.imgix.net/store/components/1634537990769-83b2a683-f675-46d3-ac1c-9fd196288fcf.png?&q=75&auto=format`

2. **Stats 2**: `https://landingfoliocom.imgix.net/store/components/1639273404694-16ad5826-1d4a-4ea1-ae48-6c2a2d32cc96.png?&q=75&auto=format`

3. **Stats 3**: `https://landingfoliocom.imgix.net/store/components/1639273452384-e193ed96-976c-46b1-8278-1ddb9327ebc4.png?&q=75&auto=format`

4. **Stats 4**: `https://landingfoliocom.imgix.net/store/components/1634537998429-c04c8535-fdce-4dac-aa1f-a0da5ee5ff7e.png?&q=75&auto=format`

5. **Stats 5**: `https://landingfoliocom.imgix.net/store/components/1656999651167-ff55dc27-1894-428f-a9a6-7d474c72f6b5.png?&q=75&auto=format`

6. **Stats 6**: `https://landingfoliocom.imgix.net/store/components/1639273395658-6817b330-b64f-47aa-823c-7de53d9765c9.png?&q=75&auto=format`

7. **Stats 7**: `https://landingfoliocom.imgix.net/store/components/1639273460685-5e614325-c87c-4a42-83d5-9d72fe01eea3.png?&q=75&auto=format`

8. **Stats 8**: `https://landingfoliocom.imgix.net/store/components/1662687647374-0b003ed4-4394-44fb-aa37-20b8c3a0d13e.png?&q=75&auto=format`

9. **Stats 9**: `https://landingfoliocom.imgix.net/store/components/1662687635063-d8c79de5-fbc3-4f07-8422-402777386ac6.png?&q=75&auto=format`

10. **Stats 10**: `https://landingfoliocom.imgix.net/store/components/1656999658747-5e9ee558-4f9e-4344-bbf5-f829ea42c132.png?&q=75&auto=format`

11. **Stats 11**: `https://landingfoliocom.imgix.net/store/components/1634538006165-2fa499e7-2c8c-4033-a168-74dd53be1d99.png?&q=75&auto=format`

12. **Stats 12**: `https://landingfoliocom.imgix.net/store/components/1644389445701-c0ba25ba-84dc-4072-afdd-61a8fcc543b7.png?&q=75&auto=format`

13. **Stats 13**: `https://landingfoliocom.imgix.net/store/components/1639273439675-59a3458c-7695-4460-95be-8fc429425c34.png?&q=75&auto=format`

14. **Stats 14**: `https://landingfoliocom.imgix.net/store/components/1662687654282-5e7735ed-4eba-4ff0-b669-ef5b76b28a98.png?&q=75&auto=format`

15. **Stats 15**: `https://landingfoliocom.imgix.net/store/components/1656999665899-41a48060-807d-4b0f-bb91-96c0540993f5.png?&q=75&auto=format`

16. **Stats 16**: `https://landingfoliocom.imgix.net/store/components/1662687641717-a13c9123-5033-4c3e-b423-cff6874c21dd.png?&q=75&auto=format`

17. **Stats 17**: `https://landingfoliocom.imgix.net/store/components/1656999658419-f99c93c0-680a-4a53-aaa0-beb75804422c.png?&q=75&auto=format`

18. **Stats 18**: `https://landingfoliocom.imgix.net/store/components/1656999674922-464d3910-71fe-4ef7-a2b1-bff877642d1e.png?&q=75&auto=format`

19. **Stats 19**: `https://landingfoliocom.imgix.net/store/components/1644389440364-a975d9cd-e5be-46d5-913d-3e49e73c4e09.png?&q=75&auto=format`

20. **Stats 20**: `https://landingfoliocom.imgix.net/store/components/1656999674542-410cf8cc-4fe5-4bef-80d6-cb68066cc09d.png?&q=75&auto=format`

21. **Stats 21**: `https://landingfoliocom.imgix.net/store/components/1644389457654-b84539e9-4719-4413-91bb-a07bc0b5c033.png?&q=75&auto=format`

22. **Stats 22**: `https://landingfoliocom.imgix.net/store/components/1644389468604-5232b4be-e7de-49ca-84fe-efcdcef0df72.png?&q=75&auto=format`
