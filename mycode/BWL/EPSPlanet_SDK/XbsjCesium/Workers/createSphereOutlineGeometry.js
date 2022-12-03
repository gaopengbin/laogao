define(["./when-cbf8cd21","./Check-35e1a91d","./Math-6a1814d8","./Cartesian2-c451a606","./Transforms-e4be2a30","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-6f280ece","./GeometryAttributes-90846c5f","./IndexDatatype-354a5ea3","./GeometryOffsetAttribute-84f7eff3","./EllipsoidOutlineGeometry-1cce8e5f"],function(n,e,i,s,t,r,o,a,d,l,c,u,m){"use strict";function p(e){var i=n.defaultValue(e.radius,1),t={radii:new s.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}p.packedLength=m.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return m.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var f=new m.EllipsoidOutlineGeometry,y={radius:void 0,radii:new s.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(e,i,t){var r=m.EllipsoidOutlineGeometry.unpack(e,i,f);return y.stackPartitions=r._stackPartitions,y.slicePartitions=r._slicePartitions,y.subdivisions=r._subdivisions,n.defined(t)?(s.Cartesian3.clone(r._radii,y.radii),t._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(y),t):(y.radius=r._radii.x,new p(y))},p.createGeometry=function(e){return m.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=p.unpack(e,i)),p.createGeometry(e)}});