create table if not exists emp(
  id_empresa smallserial,
  razon_social varchar(300),
  ruc varchar(15),
  dir_matriz varchar(300),
  dateat timestamp not null default CURRENT_TIMESTAMP,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_empresa)
)TABLESPACE pg_default;

create table if not exists emp_establecimiento(
  id_establecimiento smallserial,
  id_empresa smallint references emp(id_empresa),
  no_establecimiento varchar(3),
  nombre_comercial varchar(300),
  dir_establecimiento varchar(300),
  dateat timestamp not null default CURRENT_TIMESTAMP,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_establecimiento)
)TABLESPACE pg_default;

create table if not exists emp_departamento(
  id_departamento serial,
  id_establecimiento smallint references emp_establecimiento(id_establecimiento),
  departamento varchar(30),
  dateat timestamp not null default CURRENT_TIMESTAMP,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_departamento)
)TABLESPACE pg_default;

create table if not exists sri_tipo_identificacion(
  id_tipo_identificacion smallserial,
  tipo_identificacion varchar(30),
  dateat timestamp not null default CURRENT_TIMESTAMP,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_tipo_identificacion)
)TABLESPACE pg_default;

create table if not exists prsn(
	id_persona bigserial,
	id_tipo_identificacion smallint references sri_tipo_identificacion(id_tipo_identificacion),
	identificacion varchar(20) not null,
	nombres varchar(30),
	apellidos varchar(30),
	direccion varchar(300),
	celulares varchar(100),
	emails varchar(100),
	p_discapacidad smallint not null default 0,
	f_nacimiento date,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	dateup timestamp,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_persona)
)TABLESPACE pg_default;

create table if not exists usr_audit(
	id_audit bigserial,
	tabla varchar(20),
	detalle text,
	query text,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	primary key(id_audit)
)TABLESPACE pg_default;

create table if not exists usr_estado(
	id_estado smallserial,
	estado varchar(20),
	created timestamp not null default CURRENT_TIMESTAMP,
	deleted timestamp,
	valido smallint not null default 1,
	primary key(id_estado)
)TABLESPACE pg_default;

create table if not exists usr(
	id_usuario serial,
	usuario varchar(30),
	id_persona bigint references prsn(id_persona), 
	id_departamento int not null references emp_departamento(id_departamento),
	n_intentos smallint not null default 0,
	created timestamp not null default CURRENT_TIMESTAMP,
	deleted timestamp,
	id_estado smallint not null default 1 references usr_estado(id_estado),
	valido smallint not null default 1,
	primary key(id_usuario)
)TABLESPACE pg_default;

create table if not exists usr_roll(
	id_roll smallserial,
	roll varchar(20),
	created timestamp not null default CURRENT_TIMESTAMP,
	deleted timestamp,
	valido smallint not null default 1,
	primary key(id_roll)
)TABLESPACE pg_default;

create table if not exists usr_password(
	id_password serial,
	id_usuario int references usr(id_usuario),
	id_roll smallint references usr_roll(id_roll),
	pass varchar(65),
	created timestamp not null default CURRENT_TIMESTAMP,
	updated timestamp not null default CURRENT_TIMESTAMP,
	deleted timestamp,
	valido smallint not null default 1,
	primary key(id_password)
)TABLESPACE pg_default;

create table if not exists usr_tipo_logout(
	id_tipo_logout smallserial,
	tipo_logout varchar(15),
	created timestamp not null default CURRENT_TIMESTAMP,
	deleted timestamp,
	valido smallint not null default 1,
	primary key(id_tipo_logout)
)TABLESPACE pg_default;

create table if not exists usr_login_ctrl(
	id_login_ctrl bigserial,
	id_usuario int references usr(id_usuario),
	id_roll smallint references usr_roll(id_roll),
	date_login timestamp not null default CURRENT_TIMESTAMP,
	date_logout timestamp,
	id_tipo_logout smallint references usr_tipo_logout(id_tipo_logout),
	ip varchar(30),
	mac varchar(17),
	dispositivo varchar(20),
	tokken text,
	valido smallint not null default 1,
	primary key(id_login_ctrl)
)TABLESPACE pg_default;

create table if not exists veh_audit(
	id_audit bigserial,
	id_usuario int references usr(id_usuario),
	tabla varchar(20),
	detalle text,
	query text,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	primary key(id_audit)
)tablespace pg_default;

create table if not exists veh_marca(
	id_marca smallserial,
	marca varchar(20),
	dateat timestamp not null default CURRENT_TIMESTAMP,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_marca)
)TABLESPACE pg_default;

create table if not exists veh_categoria(
	id_categoria smallserial,
	categoria varchar(20),
	dateat timestamp not null default CURRENT_TIMESTAMP,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_categoria)
)TABLESPACE pg_default;

create table if not exists veh(
	id_vehiculo smallserial,
	id_marca int references veh_marca(id_marca),
	id_categoria int references veh_categoria(id_categoria),
	matricula varchar(15),
	descripcion text,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	dateup timestamp,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_vehiculo)
)TABLESPACE pg_default;

create table if not exists cntrga_audit(
	id_audit bigserial,
  	id_usuario int references usr(id_usuario),
	tabla varchar(20),
	detalle text,
	query text,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	primary key(id_audit)
)TABLESPACE pg_default;

create table if not exists cntrga_tarifa(
	id_tarifa bigserial,
  	id_categoria int references veh_categoria(id_categoria),
	valor_estancia decimal(7,4) not null default '0.0000',
	descripcion text,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	dateup timestamp,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_tarifa)
)TABLESPACE pg_default;

create table if not exists cntrga_bitacora(
	id_bitacora bigserial,
  	id_vehiculo int references veh(id_vehiculo),
  	id_tarifa int references cntrga_tarifa(id_tarifa),
	valor_estancia decimal(7,4) not null,
	descripcion text,
	hora_entrada time not null,
	hora_salida time,
	dateat timestamp not null default CURRENT_TIMESTAMP,
	dateup timestamp,
	datedel timestamp,
	valido smallint not null default 1,
	primary key(id_bitacora)
)TABLESPACE pg_default;