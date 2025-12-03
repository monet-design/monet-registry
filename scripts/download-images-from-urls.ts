import axios from "axios";
import * as fs from "fs/promises";
import * as path from "path";

// ============================================================
// Configuration - 여기에 DATA_STRING과 카테고리명을 설정하세요
// ============================================================
const CATEGORY_NAME = "footer";

// name,url 형식의 문자열 (각 줄마다 name,url)
const DATA_STRING = `Holocene Footer,https://unsection.b-cdn.net/Holocene_Footer.webp?class=thumbnail
Intercom Home Page Section Footer,https://unsection.b-cdn.net/Intercom_Suite_Footer.jpg?class=thumbnail
Fin AI Footer,https://unsection.b-cdn.net/Fin_AI_Footer.jpg?class=thumbnail
Tines Footer Section,https://unsection.b-cdn.net/Tines_Footer_Section.webp?class=thumbnail
Jimo Footer Section,https://unsection.b-cdn.net/Jimo_Footer_Section.webp?class=thumbnail
Plain Section Footer,https://unsection.b-cdn.net/Plain_Section_Footer.webp?class=thumbnail
GitHub Home Page Section Footer,https://unsection.b-cdn.net/cf-fd456838-5de5-468a-d572-de6b5bf0ee00.jpg?class=thumbnail
Flaghsip Home Page Section Footer,https://unsection.b-cdn.net/cf-0bc14701-6a0e-4246-238c-d065858f8e00.jpg?class=thumbnail
Popcorn Home Page Section Footer,https://unsection.b-cdn.net/cf-fb6d0501-f290-46d6-d188-d9c907823300.jpg?class=thumbnail
Passionfroot Home Page Section Footer,https://unsection.b-cdn.net/cf-4814f330-c23e-403c-3954-b0cb60ed7f00.jpg?class=thumbnail
Steel Home Page Section Footer,https://unsection.b-cdn.net/cf-7a3f57cc-6291-4cf8-c844-823f1acfba00.jpg?class=thumbnail
Steel Home Page Section CTA Footer,https://unsection.b-cdn.net/cf-ff5aed73-6a21-4b35-e033-b5b7883dd500.jpg?class=thumbnail
Current Home Page Section Footer,https://unsection.b-cdn.net/cf-4cdb9085-ec0b-438a-9ff3-be6009191500.jpg?class=thumbnail
Kinetic Hubs Page Section Footer,https://unsection.b-cdn.net/cf-c1638e38-bed1-470a-05cd-5e68e7718400.jpg?class=thumbnail
Kinetic Home Page Section Footer,https://unsection.b-cdn.net/cf-f959da25-ab59-4bc1-b903-3e22c15e8a00.jpg?class=thumbnail
Zazu Home Page Section Footer,https://unsection.b-cdn.net/cf-da135e22-94f1-4b47-8323-4ee0ea3db700.jpg?class=thumbnail
Energy Park Home Page Section Footer,https://unsection.b-cdn.net/cf-f78ba80f-d490-4162-7446-3724ad30fa00.jpg?class=thumbnail
Den Home Page Section Footer,https://unsection.b-cdn.net/cf-f6e2f213-5027-46e2-43d2-ed992c026900.jpg?class=thumbnail
Neycher Home Page Section Footer,https://unsection.b-cdn.net/cf-1bd42dae-9ee7-479e-5199-d4ca487eb800.jpg?class=thumbnail
Doconomy Home Page Section Footer,https://unsection.b-cdn.net/cf-625b0d9d-855e-4c8f-aafb-a825ba050000.jpg?class=thumbnail
In Tandem Home Page Section Footer,https://unsection.b-cdn.net/cf-65be05e0-f6e6-45ed-7437-f5ccf92d8a00.jpg?class=thumbnail
Hasko Home Page Section Footer,https://unsection.b-cdn.net/cf-0abb5b48-8485-4e19-c139-954ff5d40c00.jpg?class=thumbnail
Few and Far Home Page Section Footer,https://unsection.b-cdn.net/cf-ee5cad42-ba69-4d44-4439-8c6932338300.jpg?class=thumbnail
Riotters Home Page Section Footer,https://unsection.b-cdn.net/cf-30cc82fc-eee2-4f55-6fa9-e2ee90894200.jpg?class=thumbnail
Isla Porter Home Page Section Footer,https://unsection.b-cdn.net/cf-848ddfc1-5aef-4eca-4b65-71c906303700.jpg?class=thumbnail
Aker Home Page Section Footer,https://unsection.b-cdn.net/cf-5c329e6f-4f89-4ded-9455-b706f4050300.jpg?class=thumbnail
The Resonance Home Page Section Footer,https://unsection.b-cdn.net/cf-341f87f4-de70-4bb9-14be-8e8d5aeab100.jpg?class=thumbnail
Sevalla Home Page Section Footer,https://unsection.b-cdn.net/cf-bf347565-8133-475b-5bb5-462ad80ca600.jpg?class=thumbnail
Spellbook Home Page Section Footer,https://unsection.b-cdn.net/cf-3c8db8fc-0ab2-41ff-f56d-f998ef3bfe00.jpg?class=thumbnail
Grove Home Page Section Footer,https://unsection.b-cdn.net/cf-dc59b9cd-f682-4cc9-01dc-743b69250c00.jpg?class=thumbnail
Move Home Page Section Footer,https://unsection.b-cdn.net/cf-55e4fcbd-991f-42bc-9254-2a902d5d0900.jpg?class=thumbnail
Outseta Home Page Section Footer,https://unsection.b-cdn.net/cf-6425dff9-cfa9-4b0f-82ae-c801eb061b00.jpg?class=thumbnail
Reon Home Page Section Footer,https://unsection.b-cdn.net/cf-a76ee772-d6c7-47ca-282f-c665b201fd00.jpg?class=thumbnail
Vela Capitals Home Page Section Footer,https://unsection.b-cdn.net/cf-251e8e2b-943d-4aff-9325-80b27931e600.jpg?class=thumbnail
Sound Ethics Home Page Section Footer,https://unsection.b-cdn.net/cf-ef248650-e7ce-4101-ab39-618794152800.jpg?class=thumbnail
Atomic Home Page Section Footer,https://unsection.b-cdn.net/cf-864a1464-0848-474e-29e0-60175519cc00.jpg?class=thumbnail
Gaelle Perrin Home Page Section Footer,https://unsection.b-cdn.net/cf-c49aff00-0714-4fd8-50d5-eb1015a39800.jpg?class=thumbnail
Sketch Home Page Section Footer,https://unsection.b-cdn.net/cf-008e0cb4-147a-4620-34e4-26cd69306700.jpg?class=thumbnail
Kota Home Page Section Footer,https://unsection.b-cdn.net/cf-6629a262-0847-464e-5249-ef83b3d2a800.jpg?class=thumbnail
Routable Home Page Section Footer,https://unsection.b-cdn.net/cf-12aa6c6a-9098-49a2-aaad-868915c0de00.jpg?class=thumbnail
Lowe's Innovation Labs Home Page Section Footer,https://unsection.b-cdn.net/cf-328987b2-d6b4-40cd-f35c-353fa0ee5400.jpg?class=thumbnail
Oddit Home Page Section Footer,https://unsection.b-cdn.net/cf-7191ab90-f835-46ad-4101-5fc1672ba300.jpg?class=thumbnail
The Reach Home Page Section Footer,https://unsection.b-cdn.net/cf-ac392400-ad31-4027-8b83-c8110b2a9600.jpg?class=thumbnail
Liveblocks Home Page Section Footer,https://unsection.b-cdn.net/cf-5c59dbe4-2182-478d-433b-db3333a62200.jpg?class=thumbnail
Online Payment Platform Home Page Section Footer,https://unsection.b-cdn.net/cf-bf6042e2-d69d-4393-d066-fa01f1692500.jpg?class=thumbnail
HubSpot Home Page Section Footer,https://unsection.b-cdn.net/cf-399a96fe-98df-4eca-3f0b-d0699ce21600.jpg?class=thumbnail
Taiga Home Page Section Footer,https://unsection.b-cdn.net/cf-cfad742a-2de3-4750-36a0-9e67f23c7700.jpg?class=thumbnail
Rivian Home Page Section Footer,https://unsection.b-cdn.net/cf-61ddc430-d72b-4bbf-d0b7-ed82ef951a00.jpg?class=thumbnail
Canopy Home Page Section Footer,https://unsection.b-cdn.net/cf-c6bc89f7-4a9c-48ba-742d-011d9a022800.jpg?class=thumbnail
Checkout Home Page Section Footer,https://unsection.b-cdn.net/cf-8fd346b8-2de6-443f-ca97-0436db098700.jpg?class=thumbnail
Ahref Home Page Section Footer,https://unsection.b-cdn.net/cf-7efce7eb-07ee-4242-5444-676566f6ef00.jpg?class=thumbnail
Antimetal Home Page Section Footer,https://unsection.b-cdn.net/cf-947c2c65-d1a9-47a4-545f-16d5a2f64600.jpg?class=thumbnail
Kajabi Home Page Section Footer,https://unsection.b-cdn.net/cf-9bebca05-d7dd-4d29-7049-25b080d55300.jpg?class=thumbnail
Mollie Home Page Section Footer,https://unsection.b-cdn.net/cf-369032b9-535b-4713-8d61-90b3c0f03800.jpg?class=thumbnail
Vouch Home Page Section Footer,https://unsection.b-cdn.net/cf-c810ec39-a006-467c-3903-58522292fc00.jpg?class=thumbnail
Cape Home Page Section Footer,https://unsection.b-cdn.net/cf-ff56ccc0-5f45-4ea6-781c-297b7c9b2a00.jpg?class=thumbnail
Avo Home Page Section Footer,https://unsection.b-cdn.net/cf-f6c50bc3-1e0d-4506-4592-23120f0da400.jpg?class=thumbnail
Globalization Partners Home Page Section Footer,https://unsection.b-cdn.net/cf-cea4e486-2356-43e7-126f-305e166e9600.jpg?class=thumbnail
Superchat Home Page Section Footer,https://unsection.b-cdn.net/cf-3e5b5cec-d7c8-4091-530a-0051dcccb200.jpg?class=thumbnail
Ben Home Page Section Footer,https://unsection.b-cdn.net/cf-536e3031-2bad-43de-0db5-47bea01f4400.jpg?class=thumbnail
Patch Home Page Section Footer,https://unsection.b-cdn.net/cf-52451fc0-6dd2-4031-1947-9c54342a1500.jpg?class=thumbnail
Tandym Home Page Section Footer,https://unsection.b-cdn.net/cf-e0005372-76fb-4a2d-a6bc-aa321fd0b200.jpg?class=thumbnail
Pash Home Page Section Footer,https://unsection.b-cdn.net/cf-6a0f738c-2ac2-4110-48dc-e59d3aa24400.jpg?class=thumbnail
Help Scout Home Page Section Footer,https://unsection.b-cdn.net/cf-ba6a906b-6dea-44d1-530d-65a2e6a3e800.jpg?class=thumbnail
Eventbeds Home Page Section Footer,https://unsection.b-cdn.net/cf-5b38bb74-7eca-47af-9ac9-b7c818339000.jpg?class=thumbnail
Watershed Home Page Section Footer,https://unsection.b-cdn.net/cf-c556440c-847e-4578-5471-8addbcf0d000.jpg?class=thumbnail
Resend Home Page Section Footer,https://unsection.b-cdn.net/cf-60578308-e3e3-4949-6bb1-89a1f4921a00.jpg?class=thumbnail
Wope Home Page Section Footer,https://unsection.b-cdn.net/cf-1c7f1d28-d9b0-4731-46f8-039337591e00.jpg?class=thumbnail
Reflect Home Page Section Footer,https://unsection.b-cdn.net/cf-e39b4489-f7a4-4117-c0cd-1d08cef34200.jpg?class=thumbnail
Oyster Home Page Section Footer,https://unsection.b-cdn.net/cf-1600bdc6-1150-4dbe-bd62-e0d78b656f00.jpg?class=thumbnail
Paradigm Home Page Section Footer,https://unsection.b-cdn.net/cf-cf501d8d-8fc6-46f6-fcac-0ab732bd9d00.jpg?class=thumbnail
Help Scout Home Page Section Footer,https://unsection.b-cdn.net/cf-fd9994d7-46e6-431e-f98e-19e4724d8c00.jpg?class=thumbnail
Merchlink Home Page Section Footer,https://unsection.b-cdn.net/cf-461bf739-3da6-4e84-a3ec-7a65d47d7100.jpg?class=thumbnail
Nutsdev Home Page Section Footer,https://unsection.b-cdn.net/cf-121eabd9-3221-4298-ffef-9c50d6b64800.jpg?class=thumbnail
TBH Home Page Section Footer,https://unsection.b-cdn.net/cf-de72541a-7657-4a86-e859-d241d4718d00.jpg?class=thumbnail
Focal Home Page Section Footer,https://unsection.b-cdn.net/cf-aaa4e509-88be-4a20-56f7-00eb1d7acc00.jpg?class=thumbnail
AlignUI Home Page Section Footer,https://unsection.b-cdn.net/cf-a4764e2b-d034-492b-dc0d-9440f0071500.jpg?class=thumbnail
Foundation Alloy Home Page Section Footer,https://unsection.b-cdn.net/cf-cc1b17e5-1eb6-4681-551d-9e0ab5049100.jpg?class=thumbnail
Pipe Home Page Section Footer,https://unsection.b-cdn.net/cf-049511eb-43ff-44ae-820c-b5d522d3d100.jpg?class=thumbnail
Nutri Rich Home Section Footer,https://unsection.b-cdn.net/cf-749db465-b5d1-4c80-f7d6-237467a6ef00.jpg?class=thumbnail
Be On Hand Home Section Footer,https://unsection.b-cdn.net/cf-9b60a616-7d7b-4674-8081-a8ee624af900.jpg?class=thumbnail
Linear Ask Page Section Footer,https://unsection.b-cdn.net/cf-3c34a7a3-6309-4923-7f11-200efd986d00.jpg?class=thumbnail
Insurely Home Page Section Footer,https://unsection.b-cdn.net/cf-b4f3929d-c7b0-47e9-b844-6f037a072f00.jpg?class=thumbnail
Hawthorne Skin Home Page Section Footer,https://unsection.b-cdn.net/cf-38de42f7-6d62-4895-3970-4efbdb9bb400.jpg?class=thumbnail
Genie Home Page Section Footer,https://unsection.b-cdn.net/cf-3f0c186d-f675-434c-959e-2b529f856400.jpg?class=thumbnail
Furey Home Page Section Footer,https://unsection.b-cdn.net/cf-ce31ff95-8a28-4195-75d8-8493cfd95500.jpg?class=thumbnail
Moxion Home Page Section Footer,https://unsection.b-cdn.net/cf-1b26355f-c1a2-4469-c25e-013d28cbbf00.jpg?class=thumbnail
Hello Network Footer Page Section Footer,https://unsection.b-cdn.net/cf-c789e6d1-d95a-4fb5-996d-54145f419f00.jpg?class=thumbnail
Coherence Home Section Footer,https://unsection.b-cdn.net/cf-1a055924-ea0b-47ba-c625-981df332b600.jpg?class=thumbnail
Typeform Home Page Section Footer,https://unsection.b-cdn.net/cf-a951bfff-ac96-4057-dd07-4fea858af600.jpg?class=thumbnail
Cut The Code Home Page Section Footer,https://unsection.b-cdn.net/cf-44905032-e8d3-4550-9990-061cc718df00.jpg?class=thumbnail
Rbbecon Home Page Section Footer,https://unsection.b-cdn.net/cf-37461065-1c4d-496e-3fbe-3550a7610d00.jpg?class=thumbnail
Atrium Home Page Section Footer,https://unsection.b-cdn.net/cf-41353433-c3e5-4814-4543-e0a1311c6000.jpg?class=thumbnail
Zapier Home Page Section Footer,https://unsection.b-cdn.net/cf-e967c991-eeca-434b-dfd3-acaa117cf900.jpg?class=thumbnail
Substack Home Page Section Footer,https://unsection.b-cdn.net/cf-3491a5de-0aa1-4ebc-29df-8b86a6ea9e00.jpg?class=thumbnail
Coterie Home Page Section Footer,https://unsection.b-cdn.net/cf-14c2a743-cebe-4db5-f23b-0e507658a300.jpg?class=thumbnail
Mission Lab Home Page Section Footer,https://unsection.b-cdn.net/cf-f671704c-38c6-46d4-32c7-a25ed6612a00.jpg?class=thumbnail
Kickbase Home Page Section Footer,https://unsection.b-cdn.net/cf-98b29478-8e9a-4767-9ccf-d1efa1629000.jpg?class=thumbnail
Bunsen Studio Home Page Section Footer,https://unsection.b-cdn.net/cf-b0977d3e-1368-43ba-605e-543c19f5f200.jpg?class=thumbnail
Euphemia Home Page Section Footer,https://unsection.b-cdn.net/cf-f695e503-8560-4674-40c7-89049f5f9000.jpg?class=thumbnail
Double Makers Home Page Section Footer,https://unsection.b-cdn.net/cf-1bce1f6f-7c2e-4672-7020-02fd54c92900.jpg?class=thumbnail
Colabs Home Page Section Footer,https://unsection.b-cdn.net/cf-e287b77b-0ad0-4d0a-ef5d-d0d3dc60a200.jpg?class=thumbnail
Flecto Home Page Section Footer,https://unsection.b-cdn.net/cf-df3ec077-1ee6-4623-8f7d-b4034ec57300.jpg?class=thumbnail
Timescale Home Page Section Footer,https://unsection.b-cdn.net/cf-959de4bf-1d46-46ed-fc33-e8fa4ae89c00.jpg?class=thumbnail
Hyperliquid Home Page Section Footer,https://unsection.b-cdn.net/cf-a1b63e71-0c2a-496d-b16c-6f67bb56a900.jpg?class=thumbnail
Move Agency Home Page Section Footer,https://unsection.b-cdn.net/cf-fa2723c2-557d-492b-1025-fe0e11988e00.jpg?class=thumbnail
Memory Home Page Section Footer,https://unsection.b-cdn.net/cf-b7a81c48-9aaf-494e-a68a-7819de554800.jpg?class=thumbnail
Slite Home Page Section Footer,https://unsection.b-cdn.net/cf-a46f8fef-f53b-403a-ffdd-5e6e06a36100.jpg?class=thumbnail
Swap Commerce Home Page Section Footer,https://unsection.b-cdn.net/cf-3a324338-81b0-4886-4963-b5e91cf16900.jpg?class=thumbnail
Teamway Home Page Section Footer,https://unsection.b-cdn.net/cf-d49b4b45-e598-4676-3fa7-bdbbcdbfb800.jpg?class=thumbnail
Pera Home Page Section Footer,https://unsection.b-cdn.net/cf-4e654527-e960-434d-cb4e-2fe9835d1b00.jpg?class=thumbnail
Reveni Home Page Section Footer,https://unsection.b-cdn.net/cf-1b2e603a-45a9-47f1-4a81-eb801c1a0300.jpg?class=thumbnail
Relumeipsum Home Page Section Footer,https://unsection.b-cdn.net/cf-ee070e99-9cdd-4b0b-5b4b-a3839ff90100.jpg?class=thumbnail
Galileo Platform Page Section Footer,https://unsection.b-cdn.net/cf-461a26c5-06d1-4c7c-58e8-92ceba9a1500.jpg?class=thumbnail
10Clouds Home Section Footer,https://unsection.b-cdn.net/cf-9483b3da-8d71-454d-1d13-84f76c8bca00.jpg?class=thumbnail
That Original Home Section Footer,https://unsection.b-cdn.net/cf-ebd55d91-7cce-4183-0f11-4bac86742500.jpg?class=thumbnail
Chronicle Home Page Section Footer,https://unsection.b-cdn.net/cf-9dffcc08-28e8-4972-fb10-8d65a6871f00.jpg?class=thumbnail
Lawtrades Home Page Section Footer,https://unsection.b-cdn.net/cf-4429d394-abe9-4b1d-795a-5963aee1fe00.jpg?class=thumbnail
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
