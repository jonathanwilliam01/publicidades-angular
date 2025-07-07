<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include_once 'conexao.php';

$sql = "
    select 
    id, titulo, descricao, imagem,
    botao_link, titulo_botao_link, sp_estado, mg_estado,
    rj_estado, to_char(dt_inicio, 'DD/MM/YYYY') as dt_inicio, to_char(dt_fim, 'DD/MM/YYYY') as dt_fim,
    case when dt_fim < current_date then 'vencida' 
         when dt_fim >= current_date then 'valida' end as validade
    from publicidades
";

try {
    $stmt = $pdo->query($sql);
    $publicidades = $stmt->fetchAll();

    echo json_encode($publicidades);
    } catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro na consulta: ' . $e->getMessage()]);
    exit;
}
