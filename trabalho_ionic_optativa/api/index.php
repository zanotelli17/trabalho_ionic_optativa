<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$bolos = [
    [
    'id' => 1,
    'tipo' => 'Bolo de cenoura',
    'descricao' => 'Bolo simples de cenoura',
    'valor'  => '10,00',
    'imagem' => 'assets/img/usuario-1898-9dfefeddb69b421fc18bc216ea20c05b.jpg',
    ],
    [
    'id' => 2,
    'tipo' => 'Bolo de cenoura',
    'descricao' => 'Bolo simples de cenoura com cobertura de chocolate',
    'valor'  => '15,00',
    'imagem' => 'assets/img/recipe-bolo-cenoura-formigueiro.jpg'
    ],
    [
    'id' => 3,
    'tipo' => 'Bolo de cenoura com nozes',
    'descricao' => 'Bolo simples de cenoura com nozes',
    'valor'  => '20,00',
    'imagem' => 'assets/img/bolo-de-cenoura-com-nozes.jpg'
    ],
    [
    'id' => 4,
    'tipo' => 'Bolo de chocolate',
    'descricao' => 'Bolo de chocolate com cobertura de brigadeiro',
    'valor'  => '20,00',
    'imagem' => 'assets/img/bolo-chocolate-simples-1.jpg'
    ]
];

if( isset($_GET['idBolo']) ){
    $idBolo = $_GET['idBolo'];

    foreach( $bolos as $bolo ){
        if( $bolo['id'] == $idBolo ){
        print_r(json_encode($bolo));
        }
    }
} else {
    print_r(json_encode($bolos));
}
?>