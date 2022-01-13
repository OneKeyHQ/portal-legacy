import { FormattedMessage } from "react-intl";
import { toHelpLink } from "../../utils/utils";
import { useLocale } from "../universal/IntlProvider";

export default function Testimonial() {
  const { locale } = useLocale();

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            <FormattedMessage
              id="pages.teams.testimonials.chaoji.name"
              defaultMessage="超级君"
            />
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <FormattedMessage
              id="pages.teams.testimonials.hello.btc"
              defaultMessage="你好，比特币。"
            />
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">
            <FormattedMessage
              id="pages.teams.testimonials.preface"
              defaultMessage=" 我们在时光的列车上不断探出头，习惯地对每一个新年问好，“你好， 2009， 2013，2016，2020！＂若有全球巡游列车，我们大概也会如此，每到一个新的国度就探出头，大声问好， “你好，美国、法国、德国！＂"
            />
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="about-article prose prose-green text-gray-500 mx-auto lg:max-w-none">
              <FormattedMessage
                id="pages.teams.testimonials.content"
                values={{
                  p: (text: string) => <p className="text-lg mb-2">{text}</p>,
                }}
                defaultMessage="<p>我们向陌生的时空问好，是坦然让自己融入时空，希望未来温柔相待，藏着美好的期盼，从容而欢欣。我们也向陌生人问好，摊开心怀，握手碰肩，欣喜此时的初识，也期待下一次的重逢，让彼此的岁月多几回交集。</p><p>我们也向美好的陌生科技产品问好，无论是3D打印、基因排序，还是虚拟现实，它们正穿过黑暗的懵懂心智，在智慧烛光的观照中沿着人类想象力的边界走向大众生活。此时，更向比特币问好，一纸协议，抖擞着人类关乎自由货币的向往。这是它问世的第七个年头，欢迎其走进你我生命的历程，在岁月中合拍共谱，滋养而丰富，有所求也有所担当。比特文明的盗火者已归隐，我们是互联网金融新秩序的传道士，受自由意志的指引，怀着延续的烛光，四下穿梭黑暗森林、穿过传销绍泽，更是只身拍马走过乌托邦荒原。</p><p> 时间长河里，新年的跨越或许真是小舟承载，向另一小舟的转运。回味比特币走过的其中历程，甘苦与共之时，应当超脱出欣然。</p><p>这一年，以美国为首的更多国家对比特币持开明态度。</p><p> 这一年更多的人群使用比特币，享受比特币带来的便利和福泽；这一年，比特币算力盾牌更佳强固，突破1000亿次，回想2013年有少年因担心其系统的脆弱性而不断“早安比特币”、“晚安比特币”。</p><p>这一年，比特币从大宗商品阴跌的大局势中脱颖而出，而价从年头到年末上涨数倍，成为投资品的异军，重获全球投资者的眼光。固然，这远非我们的追求。</p><p>此刻莞尔，不可思议。</p><p> 这是一个最简单的协议，是互联网价值传递的本源。世相繁复，纵使有更多的质疑、利益自卫和诱惑抵抗，比特币的发展之路，也会遇到许多那样的人，他们接触比特币时，会如同奥雷良诺布恩地亚上校少年时第一次摸到冰块产生巨大的震撼。无意与这个世界的金融秩序抵抗，只是自由追求同时也能有一条名为比特币的金融秩序的选择。</p><p>作为比特币的从业者，这一年有寒冬萧瑟意，也有争议分裂痕。然而无论光或痕，在比特币轰然前开的革命中只是细枝末节。这一年深度思索上帝的手，洞悉宇宙语言，放弃虚无的神权，也厌倦威权的压迫，选择比特币这一数学协议作为全部财富安放的方式。</p>"
              />
            </div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="mailto:hi@onekey.so"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  <FormattedMessage
                    id="pages.team.join.join.us"
                    defaultMessage="加入我们"
                  />
                </a>
              </div>
              <div className="rounded-md shadow ml-4">
                <a
                  href={toHelpLink({ path: "articles/360002181275", locale })}
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
                >
                  <FormattedMessage
                    defaultMessage="了解更多。"
                    id="pages.hw_sectors.compatibility.subtitle_2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img
                  src="/img/logo_green_vector.png"
                  alt="OneKey"
                  className="h-8"
                />
                <div className="relative text-lg text-gray-700 font-medium mt-8">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    <FormattedMessage
                      id="pages.team.testimonials.subcontent"
                      defaultMessage="比特币的最大价值，在于它首次用技术手段保证了私有财产的不可侵犯。而对普通人来说，离开一个安全、可靠的硬件钱包，这一点的意义将大打折扣。"
                    />
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-green-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-green-300"
                    src="/img/avatar/xiongyue.jpg"
                    alt=""
                  />
                </div>
                <span className="relative ml-4 text-green-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">
                    <FormattedMessage
                      id="pages.team.testimonials.xy"
                      defaultMessage="熊越"
                    />
                  </p>
                  <p className="sm:inline">
                    {" "}
                    <FormattedMessage
                      id="pages.team.testimonials.xy.title"
                      defaultMessage="比特币早期布道者"
                    />
                  </p>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
