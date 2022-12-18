// import React, { useCallback, useRef, useState } from "react";
// import ReactFlow, {
//   addEdge,
//   Background,
//   Handle,
//   Position,
//   ReactFlowProvider,
//   updateEdge,
//   useEdgesState,
//   useNodesState,
// } from "reactflow";
// import { AiFillMessage, AiOutlineMore, AiOutlineClose } from "react-icons/ai";

// import "./Nodes.css";
// import GreetingNode from "./GreetingNode";
// import StartNode from "./StartNode";
// import CatalogNode from "./CatalogNode";
// import PackageTrackingNode from "./PackageTrackingNode";
// import ContactNode from "./ContactNode";
// import ResultNode from "./ResultNode";
// const NestedNode = ({ data }) => {
//   const [btnVisibility, setBtnVisibility] = useState(false);

//   const leftTop = {
//     top: 40,
//   };

//   const visibilityHandler = () => {
//     setBtnVisibility(!btnVisibility);
//     console.log(btnVisibility);
//   };

//   const onChange = useCallback((evt) => {
//     const value = evt.target.value;
//     localStorage.setItem(evt.target.name, JSON.stringify(value));
//     console.log(evt.target.value);
//   }, []);

//   const deleteNode = (id) => {
//     data.deleteNode(id);
//   };

//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const reactFlowWrapper = useRef(null);
//   const edgeUpdateSuccessful = useRef(true);
//   const nodeTypes = {
//     greeting: GreetingNode,
//     start: StartNode,
//     catalog: CatalogNode,
//     packageTracker: PackageTrackingNode,
//     contact: ContactNode,
//     result: ResultNode,
//     nested: NestedNode,
//   };
//   // initiate drags
//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   }, []);

//   const isValidConnection = (connection) => {
//     // eslint-disable-next-line no-unused-expressions
//     connection.target === "X";
//   };
//   const onConnectStart = (_, { nodeId, handleType }) =>
//     console.log("on connect start", { nodeId, handleType });

//   const onConnectEnd = (event) => console.log("on connect end", event);

//   //   create a function to connect the nodes
//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   let id = 0;
//   const getId = () => `node_${id++}`;

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();

//       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//       const type = event.dataTransfer.getData("application/reactflow");

//       // check if the dropped element is valid
//       if (typeof type === "undefined" || !type) {
//         return;
//       }

//       const deleteNode = (id) => {
//         setNodes((nds) => nds.filter((n) => n.id !== `node_${id - 1}`));
//         // console.log("deleted");
//       };

//       const position = reactFlowInstance.project({
//         x: event.clientX - reactFlowBounds.left,
//         y: event.clientY - reactFlowBounds.top,
//       });
//       const newNode = {
//         id: getId(),
//         type,
//         position,
//         data: { label: `${type} node`, id: id, deleteNode, isValidConnection },
//         deleteNode,
//       };

//       setNodes((nds) => nds.concat(newNode));
//     },
//     [reactFlowInstance]
//   );

//   // console.log(nodes);

//   const onEdgeUpdateStart = useCallback(() => {
//     edgeUpdateSuccessful.current = false;
//   }, []);

//   const onEdgeUpdate = useCallback(
//     (oldEdge, newConnection) => {
//       edgeUpdateSuccessful.current = true;
//       setEdges((els) => updateEdge(oldEdge, newConnection, els));
//     },
//     [setEdges]
//   );

//   const onEdgeUpdateEnd = useCallback(
//     (_, edge) => {
//       if (!edgeUpdateSuccessful.current) {
//         setEdges((eds) => eds.filter((e) => e.id !== edge.id));
//       }

//       edgeUpdateSuccessful.current = true;
//     },
//     [setEdges]
//   );

//   //   state for selected node
//   //   const [selectedNode, setSelectedNode] = useState(null);

//   //   state for selected edge

//   const edgeOptions = {
//     animated: true,
//     style: {
//       stroke: "#1592E0",
//       strokeWidth: 2,
//     },
//   };
//   return (
//     <div className="greeting-node relative shadow">
//       <div>
//         <Handle type="target" position={Position.Left} style={leftTop}></Handle>

//         <div className="node-header flex justify-between items-center">
//           <div className="flex justify-start items-center">
//             <div className="text-primary border rounded p-1 mr-4 h-auto">
//               <AiFillMessage />
//             </div>
//             <p className="text-lg font-bold">Nested Node</p>
//           </div>
//           <button
//             onClick={visibilityHandler}
//             className="btn bg-transparent border-0 text-black text-lg p-0 hover:bg-transparent"
//           >
//             {!btnVisibility ? <AiOutlineMore /> : <AiOutlineClose />}
//           </button>
//         </div>
//         <div className="node-body">
//           <div>
//             {/* reactflow will take nodes and edges as props */}
//             <div className="nested-flow">
//               <ReactFlowProvider>
//                 <div className="reactflow-wrapper" ref={reactFlowWrapper}>
//                   <ReactFlow
//                     nodes={nodes}
//                     edges={edges}
//                     onNodesChange={onNodesChange}
//                     onEdgesChange={onEdgesChange}
//                     onConnect={onConnect}
//                     nodeTypes={nodeTypes}
//                     onInit={setReactFlowInstance}
//                     onDrop={onDrop}
//                     onDragOver={onDragOver}
//                     snapToGrid
//                     onEdgeUpdate={onEdgeUpdate}
//                     onEdgeUpdateStart={onEdgeUpdateStart}
//                     onEdgeUpdateEnd={onEdgeUpdateEnd}
//                     onConnectStart={onConnectStart}
//                     onConnectEnd={onConnectEnd}
//                     defaultEdgeOptions={edgeOptions}
//                     selectNodesOnDrag={false}
//                     // deleteNode
//                   >
//                     <Background></Background>
//                     {/* <Controls></Controls> */}
//                   </ReactFlow>
//                 </div>
//               </ReactFlowProvider>
//             </div>
//           </div>
//           <div className="node-module">
//             <div className="border border-gray p-2 rounded-md">
//               <p className="text-sm">Here is the Link of Our Catalogue</p>
//               <a href="/" className="text-primary cursor-all-scroll text-sm">
//                 http://localhost:3000/
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {btnVisibility && (
//         <div className="node-menu absolute top-14 right-5">
//           <button
//             onClick={() => {
//               deleteNode(data.id);
//             }}
//             className="btn btn-sm text-black hover:text-white text-xsm bg-white inline-block w-auto"
//           >
//             Delete
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NestedNode;
