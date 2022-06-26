import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function HowToProtect() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-14">
          <h1>
            <span className="block text-base text-center text-green-600 font-semibold tracking-wide uppercase">
              <FormattedMessage
                defaultMessage="是什么让 OneKey"
                id="components.security_sectors.how_to_protect.title1"
              />
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <FormattedMessage
                defaultMessage="赢得顶尖机构专业机构的信赖"
                id="components.security_sectors.how_to_protect.title2"
              />
            </span>
          </h1>
          <p className="mt-8 text-md text-center text-gray-500 leading-8">
            <FormattedMessage
              defaultMessage="OneKey 为加密资产提供了一流的安全保障，同时又不影响可访问性和日常操作。未来的风险总是不可预估，我们的使命是让每个人都拥有保管好自己加密资产的能力。"
              id="components.security_sectors.how_to_protect.p1"
            />
          </p>
        </div>
        <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
          <h2>
            <FormattedMessage
              defaultMessage="开源"
              id="components.security_sectors.how_to_protect.head1"
            />
          </h2>
          <p>
            <FormattedMessage
              defaultMessage="我们将软件与固件代码"
              description=""
              id="components.security_sectors.how_to_protect.136420106"
            />
            <a href="https://github.com/OneKeyHQ">
              <FormattedMessage
                defaultMessage="开源在 Github"
                description=""
                id="components.security_sectors.how_to_protect.326657141"
              />
            </a>
            <FormattedMessage
              defaultMessage="中，这使得"
              description=""
              id="components.security_sectors.how_to_protect.1011252558"
            />
            <strong>
              <FormattedMessage
                defaultMessage="任何人"
                description=""
                id="components.security_sectors.how_to_protect.20080192"
              />
            </strong>
            <FormattedMessage
              defaultMessage="都能检查并验证它。"
              description=""
              id="components.security_sectors.how_to_protect.1076925989"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="我们相信只有这样做，才能澄清我们自己，以确保 OneKey 的道德操守受到群众的审视。"
              description=""
              id="components.security_sectors.how_to_protect.728560237"
            />
          </p>
          <h2>
            <FormattedMessage
              defaultMessage="安全芯片"
              description=""
              id="components.security_sectors.how_to_protect.719186103"
            />
          </h2>
          <p>
            <FormattedMessage
              defaultMessage="我们观察到一些钱包把最有价值的私钥直接存储在微处理器（MCU）中，这是相当可怕的。"
              description=""
              id="components.security_sectors.how_to_protect.84551010"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="与之形成鲜明对比的是，OneKey 使用一枚"
              description=""
              id="components.security_sectors.how_to_protect.129497377"
            />
            <strong>
              <FormattedMessage
                defaultMessage="安全芯片"
                description=""
                id="components.security_sectors.how_to_protect.719186103"
              />
            </strong>
            <FormattedMessage
              defaultMessage="来保护你的加密资产，确切地说，它是来自 Microchip 的 ATECC608A。"
              description=""
              id="components.security_sectors.how_to_protect.1384789996"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="这枚芯片个头小小，能力却格外强大。"
              description=""
              id="components.security_sectors.how_to_protect.1476443342"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="通过精妙设计的 SHA-256 响应控制，我们可以通过它"
              description=""
              id="components.security_sectors.how_to_protect.978533796"
            />
            <strong>
              <FormattedMessage
                defaultMessage="有效防止重放和窃听攻击"
                description=""
                id="components.security_sectors.how_to_protect.1177593365"
              />
            </strong>
          </p>
          <p>
            <FormattedMessage
              defaultMessage="同时，这枚芯片以加密方式执行所有命令，攻击者必须知道PIN码才能访问其中存储的信息。"
              description=""
              id="components.security_sectors.how_to_protect.1095290266"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="如果有人希望使用暴力组合进行破解，又或者重放以前的登录序列来破解这颗芯片，那是白费力气。即便他们从电路板上拆下芯片，甚至完全替换微处理器中的固件也不行。"
              description=""
              id="components.security_sectors.how_to_protect.688088208"
            />
          </p>
          <blockquote>
            <p>
              <FormattedMessage
                defaultMessage="事先安全，好过事后懊悔。"
                description=""
                id="components.security_sectors.how_to_protect.545494811"
              />
            </p>
          </blockquote>
          <figure>
            <img
              className="w-full rounded-lg border-solid border-2 border-light-blue-200"
              src="/img/mini_device.png"
              alt="OneKey Mini"
              width={1310}
              height={873}
            />
            <figcaption>
              <FormattedMessage
                defaultMessage="图中设备为 OneKey Mini"
                description=""
                id="components.security_sectors.how_to_protect.1069550624"
              />
            </figcaption>
          </figure>
          <h2>
            <FormattedMessage
              defaultMessage="私钥不触网"
              description=""
              id="components.security_sectors.how_to_protect.125579404"
            />
          </h2>
          <p>
            <FormattedMessage
              defaultMessage="我们不在你的设备微处理器（MCU）中存储私钥，而是存储在一枚单独的安全芯片 ATECC608A 中。"
              description=""
              id="components.security_sectors.how_to_protect.1399674327"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="同样的，无论你以何种方式使用 OneKey 硬件钱包，你的私钥"
              description=""
              id="components.security_sectors.how_to_protect.374454362"
            />
            <strong>
              <FormattedMessage
                defaultMessage="从始至终都没有接触网络"
                description=""
                id="components.security_sectors.how_to_protect.196720353"
              />
            </strong>
          </p>
          <p>
            <FormattedMessage
              defaultMessage="具体来说，OneKey "
              description=""
              id="components.security_sectors.how_to_protect.1206346854"
            />
            <strong>
              <FormattedMessage
                defaultMessage="帮助你对每一笔链上交易进行确认和授权"
                description=""
                id="components.security_sectors.how_to_protect.893742678"
              />
            </strong>
            <FormattedMessage
              defaultMessage="，签名过程在设备中完成，而不是你的电脑或手机。这样就能最大程度防止恶意程序伪装或诱使你进行高危操作：比如将加密资产发送给一个坏人伪装的地址。"
              description=""
              id="components.security_sectors.how_to_protect.1735768505"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="私钥不触网的另外一个好处是，强制我们的用户以物理形式记录他们的助记词。"
              description=""
              id="components.security_sectors.how_to_protect.549492836"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="尤其是当你意识到世界上竟有如此多人简单的将其助记词存放在在线笔记或聊天软件中，这是何等粗心且危险的操作。"
              description=""
              id="components.security_sectors.how_to_protect.1550964423"
            />
          </p>
          <h2>
            <FormattedMessage
              defaultMessage="OneKey 所搭载的先锋技术与认证"
              description=""
              id="components.security_sectors.how_to_protect.2112267774"
            />
          </h2>
          <p>
            <FormattedMessage
              defaultMessage="OneKey 通过了"
              description=""
              id="components.security_sectors.how_to_protect.1218147026"
            />
            <strong>
              <FormattedMessage
                defaultMessage=" CE 和 RoHS "
                description=""
                id="components.security_sectors.how_to_protect.856841926"
              />
            </strong>
            <FormattedMessage
              defaultMessage="认证"
              description=""
              id="components.security_sectors.how_to_protect.1143965"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="其内部高质量随机数发生器满足"
              description=""
              id="components.security_sectors.how_to_protect.1996527123"
            />
            <strong>
              <FormattedMessage
                defaultMessage="NIST SP 800-90A/B/C"
                description=""
                id="components.security_sectors.how_to_protect.1677429661"
              />
            </strong>
          </p>
          <p>
            <FormattedMessage
              defaultMessage="我们使用了"
              description=""
              id="components.security_sectors.how_to_protect.1962404542"
            />
            <strong>
              <FormattedMessage
                defaultMessage=" CSPRNG "
                description=""
                id="components.security_sectors.how_to_protect.1721181621"
              />
            </strong>
            <FormattedMessage
              defaultMessage="保证了随机性的质量，与"
              description=""
              id="components.security_sectors.how_to_protect.258536691"
            />
            <strong>
              <FormattedMessage
                defaultMessage="DIEDARD TEST, FIPS 140-2, TEST U01"
                description=""
                id="components.security_sectors.how_to_protect.1405515691"
              />
            </strong>
            <FormattedMessage
              defaultMessage="测试标准相当。"
              description=""
              id="components.security_sectors.how_to_protect.78252894"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="此外，我们使用"
              description=""
              id="components.security_sectors.how_to_protect.560349150"
            />
            <strong>
              <FormattedMessage
                defaultMessage="超声波焊接"
                description=""
                id="components.security_sectors.how_to_protect.195505070"
              />
            </strong>
            <FormattedMessage
              defaultMessage="工艺来防止供应链的攻击。因此，如果有人试图篡改设备并再次密封，你可以发现明显的差异，并设备被篡改时明显感知到。"
              description=""
              id="components.security_sectors.how_to_protect.566740062"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="因为有安全芯片的保护，OneKey 官方设备都会"
              description=""
              id="components.security_sectors.how_to_protect.934873433"
            />
            <strong>
              <FormattedMessage
                defaultMessage="拒绝安装任何无法验证来源的第三方固件"
                description=""
                id="components.security_sectors.how_to_protect.1729731190"
              />
            </strong>
          </p>
          <p>
            <FormattedMessage
              defaultMessage="部分 OneKey 产品线已通过"
              description=""
              id="components.security_sectors.how_to_protect.1577240449"
            />
            <strong>
              {" "}
              <FormattedMessage
                defaultMessage="EAL6"
                description=""
                id="components.security_sectors.how_to_protect.2120454"
              />{" "}
            </strong>
            <FormattedMessage
              defaultMessage="认证，并且我们将会拓展该认证至全产品线"
              description=""
              id="components.security_sectors.how_to_protect.1572748244"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="以下简单说明 EAL。"
              description=""
              id="components.security_sectors.how_to_protect.684022755"
            />
          </p>
          <p>
            <FormattedMessage
              defaultMessage="EAL 有七个不同的级别，是 Evaluation Assurance Level 的缩写，这是银行卡和国家要求的国际标准。如前所述，我们使用的"
              description=""
              id="components.security_sectors.how_to_protect.218091570"
            />
            <strong>
              <FormattedMessage
                defaultMessage="安全芯片或 MCU 的 EAL 级别是6"
                description=""
                id="components.security_sectors.how_to_protect.336508007"
              />
            </strong>
            <FormattedMessage
              defaultMessage="。在这个框架中，威胁模型考虑了攻击者的远程和物理访问。在EAL评估过程中，有几个要素被考虑在内，如："
              description=""
              id="components.security_sectors.how_to_protect.728294153"
            />
          </p>
          <ul>
            <li>
              <FormattedMessage
                defaultMessage="生命周期/供应链"
                description=""
                id="components.security_sectors.how_to_protect.1801141205"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="开发程序"
                description=""
                id="components.security_sectors.how_to_protect.746130037"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="文档"
                description=""
                id="components.security_sectors.how_to_protect.832444"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="功能测试"
                description=""
                id="components.security_sectors.how_to_protect.662745768"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="渗透测试"
                description=""
                id="components.security_sectors.how_to_protect.875943618"
              />
            </li>
          </ul>
          <p>
            <FormattedMessage
              defaultMessage="达到EAL 5+可以确保拥有最高级别的安全，以应对渗透测试。"
              description=""
              id="components.security_sectors.how_to_protect.147811996"
            />
          </p>
        </div>
      </div>
    </div>
  );
}