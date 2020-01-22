const $body = document.querySelector('body')

$body.classList.add( 'loading' )

$body.onload = () => {

    if ( document.querySelector( 'body.home' ) || document.querySelector( 'body.page-template-template-search' ) ) {
        
        console.log( 'init' )

        const key = "WrQfLnory6GOHQPjtsml4vEUUhZFRlNhROOmgTbJ"

        function initSearchForm() {

            let xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function() {

                if ( this.readyState == 4 && this.status == 200 ) {

                    console.log( 'status 200' )

                    const properties = JSON.parse( this.responseText )

                    console.log( properties ) 

                    const typesList = returnTypes ( properties )
                    const neighborhoodList = returnNeighborhoodList ( properties )
                    const propertiePhysicalStateList = returnPropertiePhysicalState ()
                
                    searchFormBuilder ( typesList, neighborhoodList, propertiePhysicalStateList )

                    // Construtor de Vitrines
                    showcaseBuilder ( properties )

                    setTimeout( () => {

                        if ( window.innerWidth > 768 ) {

                            $( '.imoveis-em-destaque' ).slick({
                        
                                dots: false,
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: true
                            })
    
                            $( '.apartamentos-em-destaque' ).slick({
                            
                                dots: false,
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: true
                            })
    
                            $( '.casas-em-destaque' ).slick({
                            
                                dots: false,
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: true
                            })
    
                            $( '.imoveis-lancamento' ).slick({
                            
                                dots: false,
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: true
                            })

                        } else if ( window.innerWidth <= 768 ) {

                            $( '.imoveis-em-destaque' ).slick({
                        
                                dots: false,
                                infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true
                            })
    
                            $( '.apartamentos-em-destaque' ).slick({
                            
                                dots: false,
                                infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true
                            })
    
                            $( '.casas-em-destaque' ).slick({
                            
                                dots: false,
                                infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true
                            })
    
                            $( '.imoveis-lancamento' ).slick({
                            
                                dots: false,
                                infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true
                            })
                        }

                        document.querySelector( '#menu-mobile-icon' ).addEventListener( 'click', ev => {

                            document.querySelector( '#menu-mobile' ).classList.add( 'open' )
                            document.querySelector( '#menu-mobile-close' ).classList.add( 'open' )
                            document.querySelector( '#menu-mobile-overlay' ).classList.add( 'open' )
                        })

                        document.querySelector( '#menu-mobile-close' ).addEventListener( 'click', ev => {

                            document.querySelector( '#menu-mobile' ).classList.remove( 'open' )
                            document.querySelector( '#menu-mobile-close' ).classList.remove( 'open' )
                            document.querySelector( '#menu-mobile-overlay' ).classList.remove( 'open' )
                        })
                        
                        document.querySelector( '#menu-mobile-overlay' ).addEventListener( 'click', ev => {
                        
                            document.querySelector( '#menu-mobile' ).classList.remove( 'open' )
                            document.querySelector( '#menu-mobile-close' ).classList.remove( 'open' )
                            document.querySelector( '#menu-mobile-overlay' ).classList.remove( 'open' )
                        })

                        $body.classList.remove( 'loading' )

                    }, 500 )

                } else {

                    console.log( 'other status' ) 

                    console.log( this.responseText )
                }
            }

            xhttp.open("GET", "https://www.jetimob.com/services/" + key + "/imoveis/?v=" + 2, true)

            xhttp.send()
        }

        function returnTypes(propertiesObj) {

            let typesList = [] 

            propertiesObj.forEach(element => {
                
                let subtype = element.subtipo

                if (typesList.indexOf(subtype) == -1 && subtype != null) {

                    typesList.push(subtype)
                }
            })

            return typesList
        }

        function returnNeighborhoodList(propertiesObj) {

            let neighborhoodList = [] 

            propertiesObj.forEach(element => {

                let neighborhood = element.endereco_bairro

                if (neighborhoodList.indexOf(neighborhood) == -1 && neighborhood != null) {

                    neighborhoodList.push(neighborhood)
                }
            })

            return neighborhoodList
        }

        function returnPropertiePhysicalState() {

            return ['Usado', 'Novo']
        }

        function searchFormBuilder(typesList, neighborhoodList, propertiePhysicalStateList) {

            let $searchForm = document.querySelector('#searchForm')

            // Cria Select de Estado Fisico do Imóvel
            let selectPropertiePhysicalStateList = document.createElement('select')
            selectPropertiePhysicalStateList.setAttribute('id', 'selectPropertiePhysicalStateList')
            //
            let selectElement1 = arrayOptionConstructor(propertiePhysicalStateList, selectPropertiePhysicalStateList)
            $searchForm.appendChild(selectElement1)

            // Cria Select de Bairros
            let selectNeighborhoodList = document.createElement('select')
            selectNeighborhoodList.setAttribute('id', 'selectNeighborhoodList')
            //
            let selectElement2 = arrayOptionConstructor(neighborhoodList, selectNeighborhoodList)
            $searchForm.appendChild(selectElement2)

            // Cria Select de Tipos de Imóveis
            let selectTypesList = document.createElement('select')
            selectTypesList.setAttribute('id', 'selectTypesList')
            //
            let selectElement3 = arrayOptionConstructor(typesList, selectTypesList)
            $searchForm.appendChild(selectElement3)

            // Cria Botão submit Buscador
            let button = document.createElement('input')
            button.setAttribute('id', 'searchFormBuilderButton')
            button.setAttribute('type', 'submit')
            button.setAttribute('value', 'buscar')
            //
            $searchForm.appendChild(button)

            //Adiciona um Escutador de Eventos no Botão de Busca
            document.querySelector('#searchFormBuilderButton')
                .addEventListener('click', (ev) => {

                    let selectPropertiePhysicalStateList = document.querySelector('#selectPropertiePhysicalStateList').value
                    let selectNeighborhoodList = document.querySelector('#selectNeighborhoodList').value
                    let selectTypesList = document.querySelector('#selectTypesList').value

                    let $searchForm = document.querySelector('#searchForm')

                    $searchForm.setAttribute('action', 
                        $searchForm.getAttribute('action') + 
                            `?physicalState=${selectPropertiePhysicalStateList}&neighborhood=${selectNeighborhoodList}&type=${selectTypesList}`
                    )
                })
        }

        function arrayOptionConstructor(array, selectElement) {
            
            array.forEach(element => {

                let option = document.createElement('option')

                option.innerText = element

                option.setAttribute('value', element.normalize( 'NFD' ).replace( /([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '' ).replace( / /g, '-' ) )

                selectElement.appendChild(option)
            })

            return selectElement
        }

        function showcaseBuilder( propertiesObj ) {

            if ( document.querySelector( 'body.home' ) ) {

                propertiesObj.forEach( element => {
        
                    if ( element.destaque == "Em destaque" ) {

                        let divAll = showcaseBuilding( element )
                        document.querySelector( '.imoveis-em-destaque' ).appendChild( divAll )
                    }
        
                    if ( element.destaque == "Em destaque" && element.subtipo == "Apartamento" ) {

                        let divAll = showcaseBuilding( element )
                        document.querySelector( '.apartamentos-em-destaque' ).appendChild( divAll )
                    }
        
                    if ( element.destaque == "Em destaque" && element.subtipo == "Casa" ) {

                        let divAll = showcaseBuilding( element )
                        document.querySelector( '.casas-em-destaque' ).appendChild( divAll )
                    }
        
                    if ( element.status == "Novo" || element.status == "Em construção" ) {

                        let divAll = showcaseBuilding( element )
                        document.querySelector( '.imoveis-lancamento' ).appendChild( divAll )
                    }
        
                    // if ( element.destaque == "Em destaque" ) {

                    //     let divAll = showcaseBuilding( element )
                    //     document.querySelector( '.imoveis-em-destaque' ).appendChild( divAll )
                    // }
                })
            }
        }

        function showcaseBuilding( element ) {

            let divAll = document.createElement( 'div' )
    
            let formBoxItem = document.createElement( 'form' )
            formBoxItem.setAttribute( 'class', 'box-item' )
            formBoxItem.setAttribute( 'method', 'post' )
            formBoxItem.setAttribute( 'action', `./product?cod=${element.codigo}` )

            //Imagem
            let img = document.createElement( 'img' )

            let imagem = element.imagens[0]

            if ( imagem ) {

                img.setAttribute( 'src', imagem[ 'link_thumb' ] )
            }

            formBoxItem.appendChild( img )
            
            let divInfos = document.createElement( 'div' )
            divInfos.setAttribute( 'class', 'box-info' )

            let divPrice = document.createElement( 'div' )
            divPrice.setAttribute( 'class', 'divPrice' )

            //Valor Imóvel
            let spanValorVenda = document.createElement( 'span' )
            spanValorVenda.setAttribute( 'class', 'spanValorVenda' )
            spanValorVenda.innerText = ( parseInt( element.valor_venda ) ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } )

            divPrice.appendChild( spanValorVenda )

            //Valor condomínio
            let spanValorCondominio = document.createElement( 'span' )
            spanValorCondominio.setAttribute( 'class', 'spanValorCondominio' )
            element.valor_condominio != null ? spanValorCondominio.innerText = ( parseInt( element.valor_condominio ) ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ) : spanValorCondominio.innerText = ' - '

            divPrice.appendChild( spanValorCondominio )

            divInfos.appendChild( divPrice )

            let divItens = document.createElement( 'div' )
            divItens.setAttribute( 'class', 'divItens' )

            //Quantos m² || Quantos Quartos || Quantas Suítes || Quantas Banheiros || Quantas Vagas
            let spanMetros = document.createElement( 'span' )
            let spanQuartos = document.createElement( 'span' )
            let spanSuites = document.createElement( 'span' )
            let spanBanheiros = document.createElement( 'span' )
            let spanVagas = document.createElement( 'span' )

            spanMetros.innerHTML = `<strong>${element.area_total}</strong></strong> m²`
            spanMetros.setAttribute( 'class', 'spanMetros' )
            spanQuartos.innerHTML = `<strong>${element.dormitorios}</strong> Quartos`
            spanQuartos.setAttribute( 'class', 'spanQuartos' )
            spanSuites.innerHTML = `<strong>${element.suites}</strong> Suítes`
            spanSuites.setAttribute( 'class', 'spanSuites' )
            spanBanheiros.innerHTML = `<strong>${element.banheiros}</strong> Banheiros`
            spanBanheiros.setAttribute( 'class', 'spanBanheiros' )
            spanVagas.innerHTML = `<strong>${element.garagens}</strong> Vagas`
            spanVagas.setAttribute( 'class', 'spanVagas' )

            divItens.appendChild( spanMetros )
            divItens.appendChild( spanQuartos )
            divItens.appendChild( spanSuites )
            divItens.appendChild( spanBanheiros )
            divItens.appendChild( spanVagas )

            divInfos.appendChild( divItens )

            //Descrição
            let spanObservacoes = document.createElement( 'span' )
            spanObservacoes.setAttribute( 'class', 'spanObservacoes' )
            spanObservacoes.innerText = element.observacoes

            divInfos.appendChild( spanObservacoes )

            //Endereco
            let spanEndereco = document.createElement( 'span' )
            spanEndereco.setAttribute( 'class', 'spanEndereco' )
            spanEndereco.innerText = `${element.endereco_logradouro}, ${element.endereco_numero} - ${element.endereco_bairro}`

            divInfos.appendChild( spanEndereco )

            formBoxItem.appendChild( divInfos )

            //Botão "VER TODOS OS DETALHES"
            let inputSubmit = document.createElement( 'input' )

            inputSubmit.setAttribute( 'value', 'VER TODOS OS DETALHES' )
            inputSubmit.setAttribute( 'type', 'submit' )
            
            formBoxItem.appendChild( inputSubmit )

            divAll.appendChild( formBoxItem )

            return divAll
        }

        initSearchForm()

    }

    if ( document.querySelector( 'body.page-template-template-search.page-template-template-search-php' ) ) {

        let stringSearch = window.location.search
        stringSearch = stringSearch.replace( '?', '' ).split( '&' )

        const status = stringSearch[0].split( '=' )[1]
        const endereco_bairro = stringSearch[1].split( '=' )[1]
        const subtipo = stringSearch[2].split( '=' )[1]

        //element.status
        //element.endereco_bairro
        //element.subtipo
        
        const key = "WrQfLnory6GOHQPjtsml4vEUUhZFRlNhROOmgTbJ"

        function initSearch() {

            let xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function() {

                if ( this.readyState == 4 && this.status == 200 ) {

                    const properties = JSON.parse( this.responseText )

                    showcaseBuilderSearch( properties )

                }
            }

            xhttp.open("GET", "https://www.jetimob.com/services/" + key + "/imoveis/?v=" + 2, true)

            xhttp.send()
        }

        function showcaseBuilderSearch( propertiesObj ) {

            propertiesObj.forEach( element => {
    
                if ( element.status.normalize( 'NFD' ).replace( /([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '' ).replace( / /g, '-' ) == status && element.endereco_bairro.normalize( 'NFD' ).replace( /([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '' ).replace( / /g, '-' ) == endereco_bairro && element.subtipo.normalize( 'NFD' ).replace( /([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '' ).replace( / /g, '-' ) == subtipo ) {
    
                    let divAll = document.createElement( 'div' )
    
                    let formBoxItem = document.createElement( 'form' )
                    formBoxItem.setAttribute( 'class', 'box-item' )
                    formBoxItem.setAttribute( 'method', 'post' )
                    formBoxItem.setAttribute( 'action', `./product?cod=${element.codigo}` )

                    //Imagem
                    let img = document.createElement( 'img' )

                    let imagem = element.imagens[0]

                    if ( imagem ) {

                        img.setAttribute( 'src', imagem[ 'link_thumb' ] )
                    }

                    formBoxItem.appendChild( img )
                    
                    let divInfos = document.createElement( 'div' )
                    divInfos.setAttribute( 'class', 'box-info' )

                    let divPrice = document.createElement( 'div' )
                    divPrice.setAttribute( 'class', 'divPrice' )

                    //Valor Imóvel
                    let spanValorVenda = document.createElement( 'span' )
                    spanValorVenda.setAttribute( 'class', 'spanValorVenda' )
                    spanValorVenda.innerText = ( parseInt( element.valor_venda ) ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } )

                    divPrice.appendChild( spanValorVenda )

                    //Valor condomínio
                    let spanValorCondominio = document.createElement( 'span' )
                    spanValorCondominio.setAttribute( 'class', 'spanValorCondominio' )
                    element.valor_condominio != null ? spanValorCondominio.innerText = ( parseInt( element.valor_condominio ) ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ) : spanValorCondominio.innerText = ' - '

                    divPrice.appendChild( spanValorCondominio )

                    divInfos.appendChild( divPrice )

                    let divItens = document.createElement( 'div' )
                    divItens.setAttribute( 'class', 'divItens' )

                    //Quantos m² || Quantos Quartos || Quantas Suítes || Quantas Banheiros || Quantas Vagas
                    let spanMetros = document.createElement( 'span' )
                    let spanQuartos = document.createElement( 'span' )
                    let spanSuites = document.createElement( 'span' )
                    let spanBanheiros = document.createElement( 'span' )
                    let spanVagas = document.createElement( 'span' )

                    spanMetros.innerHTML = `<strong>${element.area_total}</strong></strong> m²`
                    spanMetros.setAttribute( 'class', 'spanMetros' )
                    spanQuartos.innerHTML = `<strong>${element.dormitorios}</strong> Quartos`
                    spanQuartos.setAttribute( 'class', 'spanQuartos' )
                    spanSuites.innerHTML = `<strong>${element.suites}</strong> Suítes`
                    spanSuites.setAttribute( 'class', 'spanSuites' )
                    spanBanheiros.innerHTML = `<strong>${element.banheiros}</strong> Banheiros`
                    spanBanheiros.setAttribute( 'class', 'spanBanheiros' )
                    spanVagas.innerHTML = `<strong>${element.garagens}</strong> Vagas`
                    spanVagas.setAttribute( 'class', 'spanVagas' )

                    divItens.appendChild( spanMetros )
                    divItens.appendChild( spanQuartos )
                    divItens.appendChild( spanSuites )
                    divItens.appendChild( spanBanheiros )
                    divItens.appendChild( spanVagas )

                    divInfos.appendChild( divItens )

                    //Descrição
                    let spanObservacoes = document.createElement( 'span' )
                    spanObservacoes.setAttribute( 'class', 'spanObservacoes' )
                    spanObservacoes.innerText = element.observacoes

                    divInfos.appendChild( spanObservacoes )

                    //Endereco
                    let spanEndereco = document.createElement( 'span' )
                    spanEndereco.setAttribute( 'class', 'spanEndereco' )
                    spanEndereco.innerText = `${element.endereco_logradouro}, ${element.endereco_numero} - ${element.endereco_bairro}`

                    divInfos.appendChild( spanEndereco )

                    formBoxItem.appendChild( divInfos )

                    //Botão "VER TODOS OS DETALHES"
                    let inputSubmit = document.createElement( 'input' )

                    inputSubmit.setAttribute( 'value', 'VER TODOS OS DETALHES' )
                    inputSubmit.setAttribute( 'type', 'submit' )
                    
                    formBoxItem.appendChild( inputSubmit )

                    divAll.appendChild( formBoxItem )
    
                    document.querySelector( '#resultadoBusca' ).appendChild( divAll )
                }
            })
        }

        initSearch()
    }

    if ( document.querySelector( '.page-template-template-product' ) ) {

        let stringSearch = window.location.search
        stringSearch = stringSearch.replace( '?', '' ).split( '&' )

        const key = "WrQfLnory6GOHQPjtsml4vEUUhZFRlNhROOmgTbJ"

        function initSearchProduct() {

            let xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function() {

                if ( this.readyState == 4 && this.status == 200 ) {

                    const properties = JSON.parse( this.responseText )

                    showcaseBuilderProduct( properties )

                    $( '#page .images' ).slick({

                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        variableWidth: true
                    })

                    
                    if ( window.innerWidth > 768 ) {
                        $( '#page .voce-tbm-pode-vitrine ul' ).slick({
                        
                            dots: false,
                            infinite: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: true
                        })

                    } else if ( window.innerWidth <= 768 ) {

                        $( '#page .voce-tbm-pode-vitrine ul' ).slick({
                        
                            dots: false,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true
                        })
                    }

                    $( '#page .simule-um-financiamento .form-inputs .input-tel input' ).mask('(00) 0 0000-0000');
                    $( '#page .simule-um-financiamento .form-inputs .input-entrada input' ).mask( "#.##0,00", { reverse: true } );


                }
            }

            xhttp.open("GET", "https://www.jetimob.com/services/" + key + "/imoveis/?v=" + 2, true)

            xhttp.send()
        }

        function showcaseBuilderProduct( propertiesObj ) {

            propertiesObj.forEach( element => {

                if ( element.codigo == stringSearch[0].split( '=' )[1] ) {

                    element.imagens.forEach( imgItem => {

                        let img = document.createElement( 'img' )
                        img.setAttribute( 'src', imgItem.link )

                        document.querySelector( '#page .images' ).appendChild( img )
                    })

                    let title = `${element.subtipo} com ${element.dormitorios} ${element.dormitorios > 1 ? "Quartos" : "Quarto"} à Venda, ${element.area_total}${element.medida} por ${parseInt( element.valor_venda ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' })}`

                    document.querySelector( '#page .desc .title-product h3' ).innerText = title
                    document.querySelector( '.title-product-mobile h3' ).innerText = title

                    let spanCod = `COD. ${element.codigo}`

                    document.querySelector( '#page .desc .title-product h3 + span' ).innerText = spanCod
                    document.querySelector( '.title-product-mobile h3 + span' ).innerText = spanCod

                    document.querySelector( '#page .desc .characteristics-product span.metros' ).innerText = `${element.area_total}${element.medida}`

                    document.querySelector( '#page .desc .characteristics-product span.quartos' ).innerText = `${element.dormitorios} ${element.dormitorios > 1 ? "Quartos" : "Quarto"}`

                    document.querySelector( '#page .desc .characteristics-product span.banheiros' ).innerText = `${element.banheiros} ${element.banheiros > 1 ? "Banheiros" : "Banheiro"} ${element.suites} ${element.suites > 1 ? "Suítes" : "Suíte"}`

                    document.querySelector( '#page .desc .characteristics-product span.vagas' ).innerText = `${element.garagens} ${element.garagens > 1 ? "Vagas" : "Vaga"}`

                    document.querySelector( '#page .desc .description-product p' ).innerText = element.observacoes

                    document.querySelector( '#page .floating-desc .container-1 .business-type' ).innerText = element.contrato

                    document.querySelector( '#page .floating-desc .container-1 .price' ).innerText = parseInt( element.valor_venda ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' })
                    document.querySelector( '#page .simule-um-financiamento .form-inputs .valor-do-imovel input' ).value = parseInt( element.valor_venda ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' })

                    document.querySelector( '#page .floating-desc .container-1 .condominium-price' ).innerHTML = element.valor_condominio !== null ? `<span>Condomínio:</span><span>${parseInt( element.valor_condominio ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' })}</span>` : `<span>Condomínio:</span><span>-</span>`

                    document.querySelector( '#page .floating-desc .container-1 .iptu-price' ).innerHTML = element.valor_iptu !== null ? `<span>IPTU:</span><span>${parseInt( element.valor_iptu ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' })}</span>` : `<span>IPTU:</span><span>-</span>`

                    if ( element.condominio_comodidades !== null ) {

                        element.condominio_comodidades.split( ', ' ).forEach( el => {

                            let li = document.createElement( 'li' )

                            li.innerText = el

                            document.querySelector( '#page .desc .characteristics-product-condominium ul' ).appendChild( li )
                        })

                    } else {

                        document.querySelector( '#page .desc .characteristics-product-condominium' ).setAttribute( 'style', 'display: none' )
                    }

                    if ( element.imovel_comodidades !== null  ) {

                        element.imovel_comodidades.split( ', ' ).forEach( el => {

                            let li = document.createElement( 'li' )

                            li.innerText = el

                            document.querySelector( '#page .desc .characteristics-product-immobile ul' ).appendChild( li )
                        })
                    }

                    let valor_venda_minimo = parseInt( element.valor_venda ) - ( parseInt( element.valor_venda ) * 0.1 )
                    let valor_venda_maximo = parseInt( element.valor_venda ) + ( parseInt( element.valor_venda ) * 0.1 )

                    let arr = []

                    propertiesObj.forEach( ( elm, elmId, elmArr ) => {

                        if ( elm.subtipo == element.subtipo  ) {

                            if ( elm.valor_venda >= valor_venda_minimo && elm.valor_venda <= valor_venda_maximo ) {
                                
                                arr.push( elm )
                            }
                        }
                    })

                    for ( let i = 0; i < arr.length; ++ i ) {

                        let li = showcaseBuildingProductPage( arr[ i ] )
                        document.querySelector( '#page .voce-tbm-pode-vitrine ul' ).appendChild( li )

                        if ( i === 9 )
                            break
                    }
                }
            })
        }

        function showcaseBuildingProductPage( element ) {

            let li = document.createElement( 'li' )
    
            let formBoxItem = document.createElement( 'form' )
            formBoxItem.setAttribute( 'class', 'box-item' )
            formBoxItem.setAttribute( 'method', 'post' )
            formBoxItem.setAttribute( 'action', `./product?cod=${element.codigo}` )

            //Imagem
            let img = document.createElement( 'img' )

            let imagem = element.imagens[0]

            if ( imagem ) {

                img.setAttribute( 'src', imagem[ 'link_thumb' ] )
            }

            formBoxItem.appendChild( img )
            
            let divInfos = document.createElement( 'div' )
            divInfos.setAttribute( 'class', 'box-info' )

            let divPrice = document.createElement( 'div' )
            divPrice.setAttribute( 'class', 'divPrice' )

            //Valor Imóvel
            let spanValorVenda = document.createElement( 'span' )
            spanValorVenda.setAttribute( 'class', 'spanValorVenda' )
            spanValorVenda.innerText = ( parseInt( element.valor_venda ) ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } )

            divPrice.appendChild( spanValorVenda )

            //Valor condomínio
            let spanValorCondominio = document.createElement( 'span' )
            spanValorCondominio.setAttribute( 'class', 'spanValorCondominio' )
            element.valor_condominio != null ? spanValorCondominio.innerText = ( parseInt( element.valor_condominio ) ).toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ) : spanValorCondominio.innerText = ' - '

            divPrice.appendChild( spanValorCondominio )

            divInfos.appendChild( divPrice )

            let divItens = document.createElement( 'div' )
            divItens.setAttribute( 'class', 'divItens' )

            //Quantos m² || Quantos Quartos || Quantas Suítes || Quantas Banheiros || Quantas Vagas
            let spanMetros = document.createElement( 'span' )
            let spanQuartos = document.createElement( 'span' )
            let spanSuites = document.createElement( 'span' )
            let spanBanheiros = document.createElement( 'span' )
            let spanVagas = document.createElement( 'span' )

            spanMetros.innerHTML = `<strong>${element.area_total}</strong></strong> m²`
            spanMetros.setAttribute( 'class', 'spanMetros' )
            spanQuartos.innerHTML = `<strong>${element.dormitorios}</strong> Quartos`
            spanQuartos.setAttribute( 'class', 'spanQuartos' )
            spanSuites.innerHTML = `<strong>${element.suites}</strong> Suítes`
            spanSuites.setAttribute( 'class', 'spanSuites' )
            spanBanheiros.innerHTML = `<strong>${element.banheiros}</strong> Banheiros`
            spanBanheiros.setAttribute( 'class', 'spanBanheiros' )
            spanVagas.innerHTML = `<strong>${element.garagens}</strong> Vagas`
            spanVagas.setAttribute( 'class', 'spanVagas' )

            divItens.appendChild( spanMetros )
            divItens.appendChild( spanQuartos )
            divItens.appendChild( spanSuites )
            divItens.appendChild( spanBanheiros )
            divItens.appendChild( spanVagas )

            divInfos.appendChild( divItens )

            //Descrição
            let spanObservacoes = document.createElement( 'span' )
            spanObservacoes.setAttribute( 'class', 'spanObservacoes' )
            spanObservacoes.innerText = element.observacoes

            divInfos.appendChild( spanObservacoes )

            //Endereco
            let spanEndereco = document.createElement( 'span' )
            spanEndereco.setAttribute( 'class', 'spanEndereco' )
            spanEndereco.innerText = `${element.endereco_logradouro}, ${element.endereco_numero} - ${element.endereco_bairro}`

            divInfos.appendChild( spanEndereco )

            formBoxItem.appendChild( divInfos )

            //Botão "VER TODOS OS DETALHES"
            let inputSubmit = document.createElement( 'input' )

            inputSubmit.setAttribute( 'value', 'VER TODOS OS DETALHES' )
            inputSubmit.setAttribute( 'type', 'submit' )
            
            formBoxItem.appendChild( inputSubmit )

            li.appendChild( formBoxItem )

            return li
        }

        initSearchProduct()
    }
}