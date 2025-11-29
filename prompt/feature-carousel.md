아래 이미지 url들에 대해서 다음 작업 수행하라.

1. 각 이미지 url를 모두 다운로드해 `/agent-input/landingfolio-hero/{name}.jpg` 경로에 이미지 파일로 생성한다.
2. img-to-component agent를 병렬로 호출해 1번 단계에서 다운로드한 이미지들만을 대상으로 컴포넌트로 구현한다.
3. puppeteer-swarm mcp로 브라우저/탭을 launch해둔다. 이를 이후 agent들에서 공용으로 사용할 것이다.
4. next.js dev server를 실행한다. 이미 3000번 포트에 실행중인지 체크하고, 이미 실행중이라면 하지않는다.
5. 구현된 컴포넌트들에 대해서, component-implement-check agent를 병렬로 호출해 디자인 점검하고 개선한다.

---

1. **Hero 1**: `https://landingfoliocom.imgix.net/store/components/1656410450255-85b18b12-d2e3-47ad-97e6-1d52890e3829.png?&q=75&auto=format`

2. **Hero 2**: `https://landingfoliocom.imgix.net/store/components/1657540169093-ec0bc495-1bbe-41f5-8c81-71acfddcbf8b.png?&q=75&auto=format`

3. **Hero 3**: `https://landingfoliocom.imgix.net/store/components/1656998384402-c57ad182-de82-4395-869b-31ccac88ff7f.png?&q=75&auto=format`

4. **Hero 4**: `https://landingfoliocom.imgix.net/store/components/1656410803804-db5950b1-f4bb-4644-b49e-de313a5137e8.png?&q=75&auto=format`

5. **Hero 5**: `https://landingfoliocom.imgix.net/store/components/1652856874942-611cfe72-f8aa-4c2b-831d-d266ae773c82.png?&q=75&auto=format`

6. **Hero 6**: `https://landingfoliocom.imgix.net/store/components/1652856861523-922e8394-0004-4975-bcba-c634f2ed271e.png?&q=75&auto=format`

7. **Hero 7**: `https://landingfoliocom.imgix.net/store/components/1656998377895-f8b32d1b-405e-41cd-be98-77c580dca27b.png?&q=75&auto=format`

8. **Hero 8**: `https://landingfoliocom.imgix.net/store/components/1643017692288-368d5d0d-c2a1-4c32-999e-9b79b761de0a.png?&q=75&auto=format`

9. **Hero 9**: `https://landingfoliocom.imgix.net/store/components/1643884244378-5a29b50d-38ce-4324-b8f4-ca2447e85520.png?&q=75&auto=format`

10. **Hero 10**: `https://landingfoliocom.imgix.net/store/components/1634537723379-d140bb30-f48d-4ffc-b8be-b7689b627c1a.png?&q=75&auto=format`

11. **Hero 11**: `https://landingfoliocom.imgix.net/store/components/1652856840001-b23f7d91-6920-43cc-9193-6085189255d3.png?&q=75&auto=format`

12. **Hero 12**: `https://landingfoliocom.imgix.net/store/components/1655083598461-dfcf7554-9e7e-48d0-b659-0ee8266dc583.png?&q=75&auto=format`

13. **Hero 13**: `https://landingfoliocom.imgix.net/store/components/1656998395908-c9fc01eb-f8ca-43e2-ba99-d01e186b9d05.png?&q=75&auto=format`

14. **Hero 14**: `https://landingfoliocom.imgix.net/store/components/1643017719207-12c38d13-fceb-4dcb-a5d3-b2913040eda3.png?&q=75&auto=format`

15. **Hero 15**: `https://landingfoliocom.imgix.net/store/components/1638089418385-b1eaa7cb-ccf8-41fd-9ad0-e4a979e79f0f.png?&q=75&auto=format`

16. **Hero 16**: `https://landingfoliocom.imgix.net/store/components/1655083753659-ffb5d949-82e7-4998-b316-8ff0647d3f14.png?&q=75&auto=format`

17. **Hero 17**: `https://landingfoliocom.imgix.net/store/components/1652856884979-07052f57-c58a-4050-bb91-312f26d7f6e8.png?&q=75&auto=format`

18. **Hero 18**: `https://landingfoliocom.imgix.net/store/components/1644388964802-261d4e10-f734-41af-b964-e8971badd082.png?&q=75&auto=format`

19. **Hero 19**: `https://landingfoliocom.imgix.net/store/components/1643017702095-d2cdbdbf-9011-4571-b52d-09a6bd3e053e.png?&q=75&auto=format`

20. **Hero 20**: `https://landingfoliocom.imgix.net/store/components/1662688053159-6f6e2c11-ca6b-433e-808d-6f67c2007d03.png?&q=75&auto=format`

21. **Hero 21**: `https://landingfoliocom.imgix.net/store/components/1655083695839-32723574-efd2-42f6-99bc-a46e7d6c9c2f.png?&q=75&auto=format`

22. **Hero 22**: `https://landingfoliocom.imgix.net/store/components/1638088816746-098970a1-4659-4ed5-9132-a8dd288a941d.png?&q=75&auto=format`

23. **Hero 23**: `https://landingfoliocom.imgix.net/store/components/1662688034464-af24f4da-9eb0-4284-b91e-5bda13f8c625.png?&q=75&auto=format`

24. **Hero 24**: `https://landingfoliocom.imgix.net/store/components/1643017724680-2be1363c-5fd7-4699-855b-325f3a4b7e65.png?&q=75&auto=format`

25. **Hero 25**: `https://landingfoliocom.imgix.net/store/components/1662688047790-cad2c940-c804-482e-a79b-4c39df68cca6.png?&q=75&auto=format`

26. **Hero 26**: `https://landingfoliocom.imgix.net/store/components/1655083604363-30a16de0-d096-4e25-a645-be83bd846082.png?&q=75&auto=format`

27. **Hero 27**: `https://landingfoliocom.imgix.net/store/components/1662688043330-608a3a3c-b41b-462b-a968-6bea049233a7.png?&q=75&auto=format`

28. **Hero 28**: `https://landingfoliocom.imgix.net/store/components/1656998389909-c7d28b18-c244-45c8-93a7-6633d760e655.png?&q=75&auto=format`

29. **Hero 29**: `https://landingfoliocom.imgix.net/store/components/1644388955372-787bb419-6ffe-4cea-ab4b-70eb2eb6383c.png?&q=75&auto=format`

30. **Hero 30**: `https://landingfoliocom.imgix.net/store/components/1655083766590-e9f53dd5-25c3-4fbf-8d4b-2530357d6e4e.png?&q=75&auto=format`

31. **Hero 31**: `https://landingfoliocom.imgix.net/store/components/1662688060991-83eb6e4b-df00-492d-926d-26d55116de14.png?&q=75&auto=format`

32. **Hero 32**: `https://landingfoliocom.imgix.net/store/components/1643017708500-45d2ed53-a5e9-4d19-b17e-c468afd0424a.png?&q=75&auto=format`

33. **Hero 33**: `https://landingfoliocom.imgix.net/store/components/1644388980404-37f1cb91-6578-4a49-8fb5-ab6266a29fda.png?&q=75&auto=format`

34. **Hero 34**: `https://landingfoliocom.imgix.net/store/components/1644388972391-fa897267-6d44-4d7b-aead-0c85484484fe.png?&q=75&auto=format`

35. **Hero 35**: `https://landingfoliocom.imgix.net/store/components/1644388990678-91e728f1-f4b5-4458-aa9e-65f28c1a6778.png?&q=75&auto=format`

36. **Hero 36**: `https://landingfoliocom.imgix.net/store/components/1655083609237-46479a14-9b5c-4854-96e8-ba559cf90276.png?&q=75&auto=format`

37. **Hero 37**: `https://landingfoliocom.imgix.net/store/components/1644388947568-330ae1de-fe0d-4882-8089-68ac76a346dc.png?&q=75&auto=format`
