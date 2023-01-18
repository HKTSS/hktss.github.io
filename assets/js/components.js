const curYear = new Date().getFullYear();

const navbar = `
<nav class="navbar navbar-expand-lg  navbar-light">
    <div class="container nbl">
        <a class="navbar-brand" href="index.html">
            <img src="assets/img/logo/tss.png">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="text-white lnr lnr-menu"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li><a href="index.html#project">最新消息</a></li>
                <li><a href="index.html#faq">常見問題</a></li>
                <li><a href="links.html">相關連結</a></li>
                <li><a href="https://hktss.github.io/mtr-pids">PIDS 模擬器</a></li>
                <li><a href="download.html" class="selecteditem">作品下載</a></li>
            </ul>
        </div>
    </div>
</nav>
`

const footer = `
<footer class="footer-area section-gap">
    <div class="container">
        <div class="row">
            <div class="single-footer-widget">
                <h6>關於我們</h6>
                <p>一間制作不同模擬遊戲作品的工作室。<br> 目前主力開發OpenBVE作品，希望能帶給大家真實又高質的模擬體驗。</p>

                <!-- Social Icons -->

                <div class="footer-social d-flex align-items-center">
                    <a href="https://www.facebook.com/HKTransportSimulationStudio" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/hktransportsimulationstudio" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UC_eO6lDvecBjvbx77vbaFlw" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://forms.gle/gGQuevPA9cJ64YyV9" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://github.com/HKTSS" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>

                <br>

                <p class="footer-text">Copyright &copy; ${curYear} Hong Kong Transport Simulation Studio. Some rights reserved.</p>
                <p class="footer-text">Template by <a href="https://colorlib.com" target="_blank">Colorlib</a> licensed under CC BY 3.0.</p>
            </div>
        </div>
    </div>
</footer>
`;

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("footer").innerHTML = footer;