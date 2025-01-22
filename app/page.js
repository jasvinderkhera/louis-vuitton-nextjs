
export default function Home() {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto hero-section mt-2 overflow-hidden">
      <video src="/bg-desktop.mp4" autoPlay loop muted className="" />
        <div className="hero-overlay"></div>
      </div>
      <section className="max-w-screen-xl mx-auto py-20">
        <p className="text-center text-xs">
          ICONIC RE-EDITION
        </p>
        <p className="text-center text-3xl mt-5">
        Louis Vuitton x Murakami
        </p>
        <div className="flex gap-3">
          <a href="" className="box">
            <img src="re1.webp" alt="" />
            <div className="bagTitle text-center pt-3">
              <p className="text-s font-light">Women's Handbags</p>
            </div>
          </a> 
          <a href="" className="box">
            <img src="re2.webp" alt="" />
            <div className="bagTitle text-center pt-3">
              <p className="text-s font-light">Women's Wallets and Small Leather Goods</p>
            </div>
          </a> 
          <a href="" className="box">
            <img src="re3.webp" alt="" />
            <div className="bagTitle text-center pt-3">
              <p className="text-s font-light">Women's Accessories</p>
            </div>
          </a> 
          <a href="" className="box">
            <img src="re4.webp" alt="" />
            <div className="bagTitle text-center pt-3">
              <p className="text-s font-light">Women's Shoes</p>
            </div>
          </a> 
        </div>
      </section>
    </div>
  );
}
