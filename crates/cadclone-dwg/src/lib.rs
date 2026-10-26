use std::io::Cursor;
use wasm_bindgen::prelude::*;
use acadrust::{DxfReader, DxfWriter, DwgReader, DwgWriter, DxfVersion};

#[wasm_bindgen]
pub fn dwg_to_dxf(dwg_bytes: &[u8]) -> Result<String, JsValue> {
    if dwg_bytes.is_empty() {
        return Err(JsValue::from_str("Arquivo DWG vazio."));
    }
    let mut reader = DwgReader::from_stream(Cursor::new(dwg_bytes.to_vec()));
    let doc = reader.read()
        .map_err(|e| JsValue::from_str(&format!("Erro ao ler arquivo DWG: {:?}", e)))?;
    
    let mut out = Vec::new();
    let writer = DxfWriter::new(&doc);
    writer.write_to_writer(&mut out)
        .map_err(|e| JsValue::from_str(&format!("Erro ao converter para DXF: {:?}", e)))?;
    
    String::from_utf8(out)
        .map_err(|e| JsValue::from_str(&format!("Erro de codificação UTF-8 no DXF: {:?}", e)))
}

#[wasm_bindgen]
pub fn dxf_to_dwg(dxf_str: &str, version: Option<String>) -> Result<Vec<u8>, JsValue> {
    if dxf_str.trim().is_empty() {
        return Err(JsValue::from_str("Conteúdo DXF vazio."));
    }
    let reader = DxfReader::from_reader(Cursor::new(dxf_str.as_bytes().to_vec()))
        .map_err(|e| JsValue::from_str(&format!("Erro ao analisar estrutura DXF: {:?}", e)))?;
    let mut doc = reader.read()
        .map_err(|e| JsValue::from_str(&format!("Erro ao carregar documento DXF: {:?}", e)))?;
    
    if let Some(ref v) = version {
        match v.trim().to_uppercase().as_str() {
            "R12" | "AC1009" => doc.version = DxfVersion::AC1009,
            "R13" | "AC1012" => doc.version = DxfVersion::AC1012,
            "R14" | "AC1014" => doc.version = DxfVersion::AC1014,
            "2000" | "AC1015" => doc.version = DxfVersion::AC1015,
            "2004" | "AC1018" => doc.version = DxfVersion::AC1018,
            "2007" | "AC1021" => doc.version = DxfVersion::AC1021,
            "2010" | "AC1024" => doc.version = DxfVersion::AC1024,
            "2013" | "AC1027" => doc.version = DxfVersion::AC1027,
            "2018" | "AC1032" => doc.version = DxfVersion::AC1032,
            _ => doc.version = DxfVersion::AC1032,
        }
    } else {
        doc.version = DxfVersion::AC1032;
    }

    let mut out = Cursor::new(Vec::new());
    DwgWriter::write_to_writer(&mut out, &doc)
        .map_err(|e| JsValue::from_str(&format!("Erro ao gravar binário DWG: {:?}", e)))?;
    
    Ok(out.into_inner())
}

#[wasm_bindgen]
pub fn is_dwg_ready() -> bool {
    true
}
