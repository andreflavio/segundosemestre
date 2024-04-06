drop table if exists tbalteracao_atibaia;
drop table if exists tbalteracao_cruzeiro;
drop table if exists tbalteracao_taubate;
drop table if exists tbaoi_atibaia;
drop table if exists tbaoi_cruzeiro;
drop table if exists tbaoi_taubate;
drop table if exists tbapontamento_alteracao_atibaia;
drop table if exists tbapontamento_alteracao_cruzeiro;
drop table if exists tbapontamento_alteracao_taubate;
drop table if exists tbgrade_atuacao_atibaia;
drop table if exists tbgrade_atuacao_cruzeiro;
drop table if exists tbgrade_atuacao_taubate;

////////////////////////////////////////////////

create table if not exists tbalteracao_atibaia(
id integer primary key,
area_km2 float,
municipio varchar(254),
cod_estado varchar(254),
cod_class float,
class varchar(254),
obs varchar(254),
geom geometry(multipolygon,31983)
);
create table if not exists tbalteracao_cruzeiro(
id integer primary key,
area_km2 float,
municipio varchar(254),
cod_estado varchar(254),
cod_class float,
class varchar(254),
obs varchar(254),
geom geometry(multipolygon,31983)
);
create table if not exists tbalteracao_taubate(
id integer primary key,
area_km2 float,
	municipio varchar(254),
cod_estado varchar(254),
cod_class float,
class varchar(254),
obs varchar(254),
geom geometry(multipolygon,31983)
);

///////////////////////////////////////////////////////////////////


create table if not exists tbaoi_atibaia(
id integer primary key,
cd_mun varchar(7),
nm_mun varchar(50),
sigla_uf varchar(2),
area_km2 float,
geom geometry(multipolygon,31983)
);
create table if not exists tbaoi_cruzeiro(
id integer primary key,
cd_mun varchar(7),
nm_mun varchar(50),
sigla_uf varchar(2),
area_km2 float,
geom geometry(multipolygon,31983)
);
create table if not exists tbaoi_taubate(
id integer primary key,
cd_mun varchar(7),
nm_mun varchar(50),
sigla_uf varchar(2),
area_km2 float,
geom geometry(multipolygon,31983)
);

//////////////////////////////////////////////////////////////////////////

create table if not exists tbapontamento_alteracao_atibaia(
id integer primary key,
correcao varchar(254),
status varchar(254),
obs varchar(254),
geom geometry(point,31983)
);
create table if not exists tbapontamento_alteracao_cruzeiro(
	id integer primary key,
correcao varchar(254),
status varchar(254),
obs varchar(254),
geom geometry(point,31983)
);
create table if not exists tbapontamento_alteracao_taubate(
id integer primary key,
correcao varchar(254),
status varchar(254),
obs varchar(254),
geom geometry(point,31983)
);

///////////////////////////////////////////////////////////

create table if not exists tbgrade_atuacao_atibaia(
id integer primary key,
atribuicao varchar(25),
status varchar(25),
validacao varchar(25),
status_val varchar(25),
obs varchar(250),
area_km2 float,
geom geometry(multipolygon,31983)
);
create table if not exists tbgrade_atuacao_cruzeiro(
id integer primary key,
atribuicao varchar(25),
status varchar(25),
validacao varchar(25),
status_val varchar(25),
obs varchar(250),
area_km2 float,
geom geometry(multipolygon,31983)
);
create table if not exists tbgrade_atuacao_taubate(
id integer primary key,
atribuicao varchar(25),
status varchar(25),
validacao varchar(25),
status_val varchar(25),
obs varchar(250),
area_km2 float,
geom geometry(multipolygon,31983)
);

/////////////////////////////////////////

copy tbalteracao_atibaia
from 'C:\abp\alteracao_atibaia.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbalteracao_cruzeiro
from 'C:\abp\alteracao_cruzeiro.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbalteracao_taubate
from 'C:\abp\alteracao_taubate.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);

/////////////////////////////////////////////////////////////

copy tbaoi_atibaia
from 'C:\abp\aoi_atibaia.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbaoi_cruzeiro
from 'C:\abp\aoi_cruzeiro.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbaoi_taubate
from 'C:\abp\aoi_taubate.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);

//////////////////////////////////////////////////

copy tbapontamento_alteracao_atibaia
from 'C:\abp\apontamento_alteracao_atibaia.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbapontamento_alteracao_cruzeiro
from 'C:\abp\apontamento_alteracao_cruzeiro.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbapontamento_alteracao_taubate
from 'C:\abp\apontamento_alteracao_taubate.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);

/////////////////////////////////////////////

copy tbgrade_atuacao_atibaia
from 'C:\abp\grade_atuacao_atibaia.csv'
with (
	format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbgrade_atuacao_cruzeiro
from 'C:\abp\grade_atuacao_cruzeiro.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
copy tbgrade_atuacao_taubate
from 'C:\abp\grade_atuacao_taubate.csv'
with (
format csv,
header true,
delimiter ';',
null 'NULL',
encoding 'UTF-8'
);
/////////////////////////////////////////////////////


-- Selecionando os dados da tabela tbalteracao_atibaia
SELECT * FROM tbalteracao_atibaia;

-- Selecionando os dados da tabela tbalteracao_cruzeiro
SELECT * FROM tbalteracao_cruzeiro;

-- Selecionando os dados da tabela tbalteracao_taubate
SELECT * FROM tbalteracao_taubate;

-- Selecionando os dados da tabela tbaoi_atibaia
SELECT * FROM tbaoi_atibaia;

-- Selecionando os dados da tabela tbaoi_cruzeiro
SELECT * FROM tbaoi_cruzeiro;

-- Selecionando os dados da tabela tbaoi_taubate
SELECT * FROM tbaoi_taubate;

-- Selecionando os dados da tabela tbapontamento_alteracao_atibaia
SELECT * FROM tbapontamento_alteracao_atibaia;

-- Selecionando os dados da tabela tbapontamento_alteracao_cruzeiro
SELECT * FROM tbapontamento_alteracao_cruzeiro;

-- Selecionando os dados da tabela tbapontamento_alteracao_taubate
SELECT * FROM tbapontamento_alteracao_taubate;

-- Selecionando os dados da tabela tbgrade_atuacao_atibaia
SELECT * FROM tbgrade_atuacao_atibaia;

-- Selecionando os dados da tabela tbgrade_atuacao_cruzeiro
SELECT * FROM tbgrade_atuacao_cruzeiro;

-- Selecionando os dados da tabela tbgrade_atuacao_taubate
SELECT * FROM tbgrade_atuacao_taubate;



-- Selecionar os analistas que finalizaram o trabalho
SELECT * FROM tbgrade_atuacao_taubate WHERE status = 'Finalizado';

-- Selecionar os analistas que não finalizaram o trabalho
SELECT * FROM tbgrade_atuacao_taubate WHERE status <> 'Finalizado' OR status IS NULL;

-- 1. Contagem de analistas finalizados, em andamento, validados e não validados na tabela tbgrade_atuacao_taubate
SELECT
    atribuicao AS analista,
    COUNT(CASE WHEN status = 'finalizado' THEN 1 END) AS finalizados,
    COUNT(CASE WHEN status = 'em andamento' THEN 1 END) AS em_andamento,
    COUNT(CASE WHEN validacao = 'validado' THEN 1 END) AS validados,
    COUNT(CASE WHEN validacao = 'não validado' THEN 1 END) AS nao_validados
FROM
    tbgrade_atuacao_taubate
GROUP BY
    atribuicao
ORDER BY
    atribuicao;

-- 2. Contagem de analistas finalizados, não finalizados, validados e não validados na tabela tbgrade_atuacao_taubate
SELECT
    atribuicao AS analista,
    COUNT(CASE WHEN status = 'finalizado' THEN 1 END) AS finalizados,
    COUNT(CASE WHEN status <> 'finalizado' AND status <> 'em andamento' OR status IS NULL THEN 1 END) AS nao_finalizados,
    COUNT(CASE WHEN validacao = 'validado' THEN 1 END) AS validados,
    COUNT(CASE WHEN validacao <> 'validado' OR validacao IS NULL THEN 1 END) AS nao_validados
FROM
    tbgrade_atuacao_taubate
GROUP BY
    atribuicao
ORDER BY
    atribuicao;

-- 3. Contagem de analistas finalizados e não finalizados na tabela tbgrade_atuacao_taubate
SELECT
    atribuicao AS analista,
    COUNT(CASE WHEN status = 'finalizado' THEN 1 END) AS finalizados,
    COUNT(CASE WHEN status <> 'finalizado' AND status <> 'em andamento' OR status IS NULL THEN 1 END) AS nao_finalizados
FROM
    tbgrade_atuacao_taubate
GROUP BY
    atribuicao
ORDER BY
    atribuicao;

-- 4. Contagem de analistas finalizados e não finalizados na tabela tbgrade_atuacao_taubate
SELECT
    atribuicao AS analista,
    COUNT(CASE WHEN status = 'Finalizado' THEN 1 END) AS finalizados,
    COUNT(CASE WHEN status <> 'Finalizado' OR status IS NULL THEN 1 END) AS nao_finalizados
FROM
    tbgrade_atuacao_taubate
GROUP BY
    atribuicao
ORDER BY
    atribuicao;

-- 5. Contagem de analistas finalizados e não finalizados na tabela tbgrade_atuacao_taubate
SELECT
    analista,
    COUNT(CASE WHEN status = 'Finalizado' THEN 1 END) AS finalizados,
    COUNT(CASE WHEN status <> 'Finalizado' OR status IS NULL THEN 1 END) AS nao_finalizados
FROM
    tbgrade_atuacao_taubate
GROUP BY
    analista
ORDER BY
    analista;

