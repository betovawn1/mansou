<?php
    /*
        Template Name: Product
    */
?>

<?php get_header(); ?>

<div id="page">
    <div class="images"></div>
    
    <div class="title-product-mobile container">
        <h3></h3><span class="title-product-cod"></span>
    </div>

    <div class="container">
        <div class="main-container">
            <div class="desc">
                <div class="title-product">
                    <h3></h3><span class="title-product-cod"></span>
                </div>
                <div class="characteristics-product">
                    <span class="metros"></span>
                    <span class="quartos"></span>
                    <span class="banheiros"></span>
                    <span class="vagas"></span>
                </div>
                <div class="description-product">
                    <p></p>
                </div>
                <div class="share-buttons">
                    <a href="https://api.whatsapp.com/send?phone=5521991907705" class="enviar-whatsapp">Whatsapp</a>
                    <button class="enviar-para-alguem" onclick="copyToClipBoard()" onmouseout="outFunc()" >
                        <span class="tooltiptext" id="myTooltip">Copiar Link</span>
                        Enviar para alguém
                    </button>
                </div>
                <div class="characteristics-product-condominium">
                    <h3>Características do Condomínio</h3>
                    <ul></ul>
                </div>
                <div class="characteristics-product-immobile">
                    <h3>Características do Imóvel</h3>
                    <ul></ul>
                </div>
            </div>

            <div class="floating-desc">
                <div class="container-1">
                    <div class="business-type"></div>
                    <div class="price"></div>
                    <div class="condominium-price"></div>
                    <div class="iptu-price"></div>
                </div>
                <div class="container-2">
                    <h4>sobre o imóvel</h4>
                    <a href="#" class="quero-visitar">Quero Visitar</a>
                    <a href="#" class="quero-mais-info">Quero mais informações</a>
                </div>
            </div>

            <div class="voce-tbm-pode-vitrine">
                <h3>Você também pode gostar</h3>
                <ul></ul>
            </div>
        </div>

        <div class="simule-um-financiamento">
            <h3>Simule um financiamento</h3>
            <p>Simule um financiamento para a compra do seu imóvel.</p>
            <form
                action="https://formspree.io/xeqavlkw"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="row">
                    <div class="col-lg-9 form-inputs">
                        <div class="col-4">
                            <label for="">NOME</label>
                            <input type="text">
                        </div>
                        <div class="col-4 input-tel">
                            <label for="">TELEFONE</label>
                            <input type="text" placeholder="Ex: (11) 9 1234-1234 ">
                        </div>
                        <div class="col-4">
                            <label for="">E-mail</label>
                            <input type="text">
                        </div>
                        <div class="col-4 valor-do-imovel">
                            <label for="">VALOR DO IMÓVEL</label>
                            <span>Preço de venda do imóvel</span>
                            <input type="text" disabled>
                        </div>
                        <div class="col-4 input-entrada">
                            <label for="">ENTRADA</label>
                            <span>Valor a ser pago à vista</span>
                            <input type="text" placeholder="Ex: R$ 30.000,00">
                        </div>
                        <div class="col-4 input-prazo">
                            <label for="">PRAZO</label>
                            <span>Em anos</span>
                            <input type="text" placeholder="Ex: 36">
                        </div>
                    </div>
                    <div class="col-lg-3 form-button">
                        <h6>VALOR A SER FINANCIADO</h6>
                        <span>Simule o financiamento do imóvel</span>
                        <button type="submit">CALCULAR</button>
                    </div>
                    <div class="col-lg-12 footer-form">
                        <p>As taxas, cálculos e resultados apresentados possuem caráter meramente informativo, usam o sistema de amortização constante e podem não refletir as condições de financiamento deste imóvel.</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script>

    function copyToClipBoard() {

        var copyText = window.location.href

        document.addEventListener('copy', function(e) {

            e.clipboardData.setData('text/plain', copyText)
            e.preventDefault()

        }, true)

        document.execCommand('copy');  

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Link Copiado";
    }

    function outFunc() {

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copiar Link";
    }

</script>

<?php get_footer(); ?>