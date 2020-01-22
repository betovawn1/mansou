<?php
    /*
        Template Name: Formulário
    */
?>

<?php get_header(); ?>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="title-form">
                <h3>Fale Conosco</h3>
                <p>Preencha o formulário para sabermos melhor como podemos ajudar. Você pode falar conosco tambpem através do nosso Whatsapp que esta no conta inferior da tela.</p>
                <div class="marbles">
                    <span class="marble-orange"></span>
                    <span class="marble-blue"></span>
                    <span class="marble-ice"></span>
                </div>
            </div>

            <div class="form">
                <form action="">
                    <div class="inputs-group inputs-group-half-column inputs-group-nome">
                        <label for="input-nome">Nome</label>
                        <input type="text" name="input-nome" class="input-nome">
                    </div>
                    <div class="inputs-group inputs-group-half-column inputs-group-tel">
                        <label for="input-tel">Telefone</label>
                        <input type="text" name="input-tel" class="input-tel">
                    </div>
                    <div class="inputs-group inputs-group-email">
                        <label for="input-email">E-mail</label>
                        <input type="text" name="input-email" class="input-email">
                    </div>
                    <div class="inputs-group inputs-group-purpouse">
                        <label for="input-purpouse">Assunto</label>
                        <input type="text" name="input-purpouse" class="input-purpouse">
                    </div>
                    <div class="inputs-group inputs-group-message">
                        <label for="input-message">Mensagem</label>
                        <textarea type="text" name="input-message" class="input-message" rows="10"></textarea>
                    </div>
                    <div class="button-submit">
                        <button type="submit">enviar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-6 column-form-img">
            <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2020/01/cONTATO-02.png" alt="">
        </div>
    </div>
</div>

<div class="container-fluid map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.794484319736!2d-43.57129718503471!3d-22.88404908502336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3dcbd63e357%3A0x735621bfefa47e7f!2sEstrada%20do%20Tingui%2C%20658%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023075-007!5e0!3m2!1spt-BR!2sbr!4v1579629993181!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>

<div class="container container-form-socials">
    <h3>nos encontre também</h3>
    <ul>
        <li>
            <a href="https://m.facebook.com/mansouimoveis/?ref=bookmarks">
                <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2020/01/cONTATO-03.png" alt="Facebook">
            </a>
        </li>
        <li>
            <a href="">
                <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2020/01/cONTATO-04.png" alt="YouTube">
            </a>
        </li>
        <li>
            <a href="https://instagram.com/mansouimoveis?igshid=1amb0mm7bad35">
                <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2020/01/cONTATO-05.png" alt="Instagram">
            </a>
        </li>
        <li>
            <a href="https://api.whatsapp.com/send?phone=5521991907705">
                <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2020/01/cONTATO-06.png" alt="WhatsApp">
            </a>
        </li>
    </ul>
</div>

<?php get_footer(); ?>